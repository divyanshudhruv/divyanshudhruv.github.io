"use client";

import { useEffect, useState } from "react";

export function useInsightsTotal(): number {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const abort = new AbortController();

		fetch(`/api/insights?t=${Date.now()}`, { signal: abort.signal })
			.then((r) => {
				if (!r.ok) throw new Error(`HTTP ${r.status}`);
				return r.json();
			})
			.then((d) => {
				const items: { visitors: number }[] = d.data ?? d;
				const today = items[items.length - 1];
				if (today && !abort.signal.aborted) setTotal(today.visitors);
			})
			.catch(() => {});

		return () => abort.abort();
	}, []);

	return total;
}
