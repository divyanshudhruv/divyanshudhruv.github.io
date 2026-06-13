import { Flex } from "@once-ui-system/core";
import type { TCountryCode } from "countries-list";
import { DottedMap, type Marker } from "@/components/dotted-map";

type MyMarker = Marker & {
  overlay: {
    countryCode: TCountryCode;
    label: string;
  };
};

const markers: MyMarker[] = [
  {
    lat: 22.2728,
    lng: 73.1984,
    size: 1,
    overlay: { countryCode: "IN", label: "Vadodara" },
  },
];

export default function MapSection() {
  return (
    <Flex fillWidth fitHeight>
      <DottedMap<MyMarker>
        markers={markers}
        pulse={true}
        renderMarkerOverlay={({ marker, x, y, r }) => {
          const { label } = marker.overlay;
          const fontSize = r * 2.5;
          const pillH = r * 5.5;
          const pillW = label.length * (fontSize * 0.62) + r * 1;
          const pillX = x + r + r * 1.8;
          const pillY = y - pillH / 2;
          return (
            <g style={{ pointerEvents: "none" }} className="scale-1.8">
              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={pillH / 2}
                fill="rgba(0,0,0,0.55)"
              />
              <text
                x={pillX + r * 0.7}
                y={y + fontSize * 0.35}
                fontSize={fontSize}
                fill="white"
              >
                {label}
              </text>
            </g>
          );
        }}
      />
    </Flex>
  );
}
