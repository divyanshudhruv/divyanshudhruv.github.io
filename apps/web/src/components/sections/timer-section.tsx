"use client";

import { Flex, Text } from "@once-ui-system/core";
import { useEffect, useRef, useState } from "react";
import {
	TimerDisplay,
	TimerIcon,
	TimerRoot,
	useTimer,
} from "@/components/timer";

const TOTAL_KEY = "website-total-time";

function formatTotalTime(s: number) {
	const h = Math.floor(s / 3600);
	const m = Math.floor((s % 3600) / 60);
	const sec = s % 60;
	return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

export default function TimerSection({ id }: { id: string }) {
	const [totalTime, setTotalTime] = useState(0);
	const totalStoredRef = useRef(0);
	const sessionRef = useRef(0);

	const session = useTimer({ loading: true, format: "HH:MM:SS" });

	useEffect(() => {
		sessionRef.current = session.elapsedTime;
	});

	useEffect(() => {
		const saved = localStorage.getItem(TOTAL_KEY);
		const initial = saved ? Number.parseInt(saved, 10) : 0;
		totalStoredRef.current = initial;
		setTotalTime(initial);

		const save = () => {
			localStorage.setItem(
				TOTAL_KEY,
				String(totalStoredRef.current + sessionRef.current),
			);
		};

		const interval = setInterval(save, 10_000);
		document.addEventListener("visibilitychange", save);
		return () => {
			clearInterval(interval);
			document.removeEventListener("visibilitychange", save);
		};
	}, []);

	useEffect(() => {
		setTotalTime(totalStoredRef.current + session.elapsedTime);
	}, [session.elapsedTime]);

	return (
		<Flex
			id={id}
			direction="column"
			fillWidth
			horizontal="center"
			vertical="start"
			gap={0.5}
		>
			<Flex fillWidth paddingBottom={2}>
				<hr className="w-full text-taupe-900" />
			</Flex>
			<Text
				className="font-body font-normal text-foreground/80 text-lg"
				align="right"
			>
				You've been browsing this website in current session for:
			</Text>
			<TimerRoot variant="outline" size="lg">
				<TimerIcon loading={true} />
				<TimerDisplay time={session.formattedTime.display} />
			</TimerRoot>
			<hr />
			<hr />
			<Text
				className="font-body font-normal text-foreground/80 text-lg"
				align="right"
			>
				Total Time spent on this website:
			</Text>
			<TimerRoot variant="outline" size="lg">
				<TimerIcon loading={true} />
				<TimerDisplay time={formatTotalTime(totalTime)} />
			</TimerRoot>
			<Flex fillWidth paddingTop={2}>
				<hr className="w-full text-taupe-900" />
			</Flex>
		</Flex>
	);
}
