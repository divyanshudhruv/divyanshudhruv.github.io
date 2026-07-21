"use client";
("use memo");

import { createContext, type ReactNode, useContext } from "react";

interface ChartLegendHoverContextValue {
	hoveredIndex: number | null;
	setHoveredIndex: (index: number | null) => void;
}

const ChartLegendHoverContext =
	createContext<ChartLegendHoverContextValue | null>(null);

function ChartLegendHoverProvider({
	hoveredIndex,
	onHoverChange,
	children,
}: {
	hoveredIndex: number | null;
	onHoverChange: (index: number | null) => void;
	children: ReactNode;
}) {
	const value = { hoveredIndex, setHoveredIndex: onHoverChange };

	return (
		// react-doctor-disable-next-line react-doctor/context-provider-value-from-unmemoized-local-literal
		<ChartLegendHoverContext.Provider value={value}>
			{children}
		</ChartLegendHoverContext.Provider>
	);
}

ChartLegendHoverProvider.chartPhase = "clipExcluded" as const;

export function useChartLegendHover(): ChartLegendHoverContextValue {
	const context = useContext(ChartLegendHoverContext);
	return (
		context ?? {
			hoveredIndex: null,
			setHoveredIndex: () => {
				/* noop outside ChartLegendHoverProvider */
			},
		}
	);
}
