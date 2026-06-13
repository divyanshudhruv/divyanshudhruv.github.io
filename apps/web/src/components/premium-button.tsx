"use client";

import { cn } from "@homepage/ui/lib/utils";
import { useEffect, useState } from "react";

interface PremiumButtonProps {
	text?: string;
	className?: string;
	boxColor?: string;
	pattern?: "arrow" | "x" | "mail" | "linkedin" | "repository" | "globe";
	onClick?: () => void;
	ariaLabel?: string;
}

const PremiumButton = ({
	text = "Premium Button",
	className,
	boxColor,
	pattern = "arrow",
	onClick,
	ariaLabel,
}: PremiumButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={ariaLabel}
			className={cn(
				"relative flex h-[44px] cursor-pointer items-center gap-2 rounded-[8px] bg-foreground pr-5 pl-[52px] tracking-tight transition-all hover:scale-[1.00] active:scale-[0.98] dark:border dark:border-neutral-800",
				className,
			)}
		>
			<Box boxColor={boxColor} pattern={pattern} />
			<span className="font-medium text-white">{text}</span>
		</button>
	);
};

const Box = ({
	boxColor,
	pattern,
}: {
	boxColor?: string;
	pattern: "arrow" | "x" | "mail" | "linkedin" | "repository" | "globe";
}) => {
	const [step, setStep] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setStep((prev) => (prev + 1) % 14);
		}, 250);
		return () => clearInterval(timer);
	}, []);

	const isArrow = (row: number, col: number) => {
		const headX = step - 4;
		if (row === 2) return col <= headX && col >= headX - 4;
		if (row === 1 || row === 3) return col === headX - 1;
		if (row === 0 || row === 4) return col === headX - 2;
		return false;
	};

	const isX = (row: number, col: number, offset: number) => {
		const c = col - offset;
		return row === c || row + c === 4;
	};

	const isMail = (row: number, col: number, offset: number) => {
		const c = col - offset;
		if (row === 0 || row === 4) return c >= 0 && c <= 4;
		if (row === 1) return c === 0 || c === 4 || c === 1 || c === 3;
		if (row === 3) return c === 0 || c === 4;
		if (row === 2) return c === 0 || c === 2 || c === 4;
		return false;
	};

	const isLinkedInSquare = (row: number, col: number, offset: number) => {
		const c = col - offset;
		if (row === 0 || row === 4) return c >= 1 && c <= 3;
		if (row === 1 || row === 3) return c >= 0 && c <= 4;
		if (row === 2) return (c >= 0 && c <= 1) || (c >= 3 && c <= 4);
		return false;
	};

	const isRepository = (row: number, col: number, offset: number) => {
		const c = col - offset;
		if (row === 0 || row === 2 || row === 4) return c >= 0 && c <= 4;
		if (row === 1 || row === 3) return c === 0 || c === 4;
		return false;
	};

	const isGlobe = (row: number, col: number, offset: number) => {
		const c = col - offset;
		if (row === 0 || row === 4) return c >= 1 && c <= 3;
		if (row === 1 || row === 3) return c >= 0 && c <= 4 && c !== 2;
		if (row === 2) return c === 0 || c === 4;
		return false;
	};

	const isHighlighted = (row: number, col: number) => {
		const offset = step - 4;
		if (pattern === "arrow") return isArrow(row, col);
		if (pattern === "x") return isX(row, col, offset);
		if (pattern === "mail") return isMail(row, col, offset);
		if (pattern === "linkedin") return isLinkedInSquare(row, col, offset);
		if (pattern === "repository") return isRepository(row, col, offset);
		if (pattern === "globe") return isGlobe(row, col, offset);
		return false;
	};

	return (
		<div
			className={`absolute inset-y-0 left-4 my-auto flex size-9 flex-col items-center justify-center gap-px rounded-[4px] shadow-sm transition-all duration-400 ease-out ${boxColor}`}
		>
			{[0, 1, 2, 3, 4].map((row) => (
				<div key={row} className="flex gap-[2px]">
					{[0, 1, 2, 3, 4].map((col) => (
						<Bubble key={col} highlight={isHighlighted(row, col)} />
					))}
				</div>
			))}
		</div>
	);
};

const Bubble = ({ highlight }: { highlight?: boolean }) => {
	return (
		<span
			className={cn(
				"inline-block size-[3px] bg-white/25",
				highlight && "animate-nudge bg-white",
			)}
		/>
	);
};

export default PremiumButton;
