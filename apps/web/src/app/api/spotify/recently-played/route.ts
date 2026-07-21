import { NextResponse } from "next/server";

class SpotifyAuthError extends Error {
	constructor(
		message: string,
		public status: number,
	) {
		super(message);
		this.name = "SpotifyAuthError";
	}
}

async function getAccessToken(): Promise<string> {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) {
		throw new SpotifyAuthError(
			"Missing Spotify credentials — check SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN in .env",
			400,
		);
	}

	const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
		cache: "no-store",
	});

	if (!tokenRes.ok) {
		throw new SpotifyAuthError(
			"Failed to fetch Spotify token",
			tokenRes.status,
		);
	}
	const data = await tokenRes.json();

	if (!tokenRes.ok) {
		throw new SpotifyAuthError(
			`Spotify token refresh failed (${tokenRes.status}): ${data.error_description ?? data.error ?? "unknown error"}`,
			tokenRes.status,
		);
	}

	if (!data.access_token) {
		throw new SpotifyAuthError(
			"Spotify returned success but no access_token — refresh token may be expired",
			401,
		);
	}

	return data.access_token;
}

export type TrackData = {
	id: string;
	title: string;
	artist: string;
	albumArt: string;
	previewUrl: string | null;
	spotifyUrl: string;
	playedAt: string;
};

function mapTrack(item: {
	id: string;
	name: string;
	artists: { name: string }[];
	album: { images: { url: string }[] };
	preview_url: string | null;
	external_urls: { spotify: string };
}): TrackData {
	return {
		id: item.id,
		title: item.name,
		artist: item.artists.map((a) => a.name).join(", "),
		albumArt: item.album.images[0]?.url ?? "",
		previewUrl: item.preview_url,
		spotifyUrl: item.external_urls.spotify,
		playedAt: new Date().toISOString(),
	};
}

export async function POST() {
	try {
		const accessToken = await getAccessToken();

		const nowPlayingRes = await fetch(
			"https://api.spotify.com/v1/me/player/currently-playing",
			{
				headers: { Authorization: `Bearer ${accessToken}` },
				cache: "no-store",
			},
		);

		let nowPlayingData: Record<string, unknown> | null = null;
		if (nowPlayingRes.status === 200) {
			nowPlayingData = (await nowPlayingRes.json()) as Record<string, unknown>;
			if (nowPlayingData?.is_playing && nowPlayingData?.item) {
				return NextResponse.json({
					tracks: [
						mapTrack(nowPlayingData.item as Parameters<typeof mapTrack>[0]),
					],
					isCurrentlyPlaying: true,
				});
			}
		}

		const res = await fetch(
			"https://api.spotify.com/v1/me/player/recently-played?limit=5",
			{
				headers: { Authorization: `Bearer ${accessToken}` },
				cache: "no-store",
			},
		);

		if (!res.ok) {
			const err = await res.text();
			let parsed: { error?: { message?: string } } | null = null;
			try {
				parsed = JSON.parse(err);
			} catch {}
			const message = parsed?.error?.message ?? err;
			return NextResponse.json(
				{ error: `Spotify API error (${res.status}): ${message}` },
				{ status: res.status },
			);
		}

		const recentlyPlayedData = await res.json();

		let tracks: TrackData[] = recentlyPlayedData.items.map(
			(item: {
				track: {
					id: string;
					name: string;
					artists: { name: string }[];
					album: { images: { url: string }[] };
					preview_url: string | null;
					external_urls: { spotify: string };
				};
				played_at: string;
			}) => ({
				id: item.track.id,
				title: item.track.name,
				artist: item.track.artists.map((a) => a.name).join(", "),
				albumArt: item.track.album.images[0]?.url ?? "",
				previewUrl: item.track.preview_url,
				spotifyUrl: item.track.external_urls.spotify,
				playedAt: item.played_at,
			}),
		);

		// If currently-playing returned a track but wasn't actively playing,
		// prepend it as the last played track
		if (nowPlayingData?.item) {
			const lastTrack = mapTrack(
				nowPlayingData.item as Parameters<typeof mapTrack>[0],
			);
			tracks = [lastTrack, ...tracks.filter((t) => t.id !== lastTrack.id)];
			tracks = tracks.slice(0, 5);
		}

		return NextResponse.json({ tracks, isCurrentlyPlaying: false });
	} catch (err) {
		const status = err instanceof SpotifyAuthError ? err.status : 500;
		return NextResponse.json({ error: String(err) }, { status });
	}
}
