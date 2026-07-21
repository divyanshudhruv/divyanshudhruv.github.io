import { Flex } from "@once-ui-system/core";
import Image from "next/image";
import ImageTrail, { ImageTrailItem } from "@/components/image-trail";
import { CreditsGrid } from "@/components/section-ui/credits-grid";
import { images } from "@/content/image-trail";

export default function CreditsFooter({ id }: { id: string }) {
	return (
		<Flex
			id={id}
			direction="column"
			fillWidth
			fitHeight
			horizontal="center"
			vertical="center"
			gap={1}
		>
			<ImageTrail
				threshold={60}
				keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
				keyframesOptions={{
					opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
					scale: { duration: 1, times: [0, 0.8, 1] },
				}}
				style={{
					position: "absolute",
					inset: 0,
					zIndex: 9,
					backgroundColor: "transparent",
				}}
			>
				{images.map((url, index) => (
					<ImageTrailItem key={index + url}>
						<div className="relative h-30 w-30 sm:h-38 sm:w-38">
							<Image
								src={url}
								alt=""
								className="object-cover"
								sizes="30vw"
								fill
								loading="lazy"
							/>
						</div>
					</ImageTrailItem>
				))}
			</ImageTrail>
			<CreditsGrid />
		</Flex>
	);
}
