"use client";

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import Image from "next/image";

import { memo, useCallback, useState } from "react";
import "swiper/swiper.css";
import { cn } from "@homepage/ui/lib/utils";

const images = [
	{
		src: "/images/x.com/13.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/32.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/20.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/21.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/19.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/1.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/2.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/3.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
	{
		src: "/images/x.com/4.jpeg",
		alt: "Illustrations by my fav AarzooAly",
		code: "# 23",
	},
];

const CARD_ACTIVE = { width: "24rem", height: "24rem" } as const;
const CARD_INACTIVE = { width: "5rem", height: "24rem" } as const;
const CARD_TRANSITION = { duration: 0.15, ease: "easeInOut" } as const;

interface CardItemProps {
	image: { src: string; alt: string; code: string };
	isActive: boolean;
	index: number;
	onActivate: (index: number) => void;
}

const CardItem = memo(function CardItem({
	image,
	isActive,
	index,
	onActivate,
}: CardItemProps) {
	const handleActivate = useCallback(() => onActivate(index), [onActivate, index]);
	return (
		<m.div
			role="button"
			className="relative cursor-pointer overflow-hidden rounded-[20px]"
			animate={isActive ? CARD_ACTIVE : CARD_INACTIVE}
			transition={CARD_TRANSITION}
			onClick={handleActivate}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") handleActivate();
			}}
			onMouseEnter={handleActivate}
		>
			<AnimatePresence>
				{isActive && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute h-full w-full bg-linear-to-t from-black/40 to-transparent"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isActive && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute flex h-full w-full flex-col items-end justify-end p-4"
					>
						<p className="text-left text-white/50 text-xs">{image.code}</p>
					</m.div>
				)}
			</AnimatePresence>
			<Image
				src={image.src}
				fill
				className="object-cover"
				alt={image.alt}
				sizes="(max-width: 768px) 100vw, 384px"
			/>
		</m.div>
	);
});

const Skiper52 = () => {
	return (
		<div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
			<HoverExpand_001 className="" images={images} />
		</div>
	);
};

export { Skiper52 };

const HoverExpand_001 = ({
	images,
	className,
}: {
	images: { src: string; alt: string; code: string }[];
	className?: string;
}) => {
	const [activeImage, setActiveImage] = useState<number | null>(0);

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.3,
					delay: 0.5,
				}}
				className={cn("relative w-full max-w-6xl", className)}
			>
				<div className="flex w-full items-center justify-center gap-1">
					{images.map((image, index) => (
						<CardItem
							key={image.src}
							image={image}
							isActive={activeImage === index}
							index={index}
							onActivate={setActiveImage}
						/>
					))}
				</div>
			</m.div>
		</LazyMotion>
	);
};

export { HoverExpand_001 };

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
