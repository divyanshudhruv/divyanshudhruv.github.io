"use client";

import { useEffect, useState } from "react";
import type { InsightsDay } from "./types";

export function useInsightsData() {
	const [data, setData] = useState<InsightsDay[]>([]);
	const [status, setStatus] = useState<"loading" | "ready">("loading");

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				const r = await fetch(`/api/insights?t=${Date.now()}`, {
					signal: controller.signal,
				});
				if (!r.ok) {
					setData([]);
					setStatus("ready");
					return;
				}
				const d = await r.json();
				const items = d.data ?? d;
				setData(items);
				setStatus("ready");
			} catch (err) {
				if (err instanceof DOMException && err.name === "AbortError") return;
				setData([]);
				setStatus("ready");
			}
		})();

		return () => controller.abort();
	}, []);

	return { data, status };
}
