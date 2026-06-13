import { MasonryGrid, Media } from "@once-ui-system/core";
import { Lens } from "@/components/lens";

const images = [
  "https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781017684713-fxr10o.jpg",
  "https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781021304729-jzuf4f.png",
  "https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015525373-1yythf.jpg",
  "https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015567660-0m349m.jpg",
  "https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781017857397-neo5cq.png",
  "https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015545636-vzy0p5.jpg",
];

const aspectRatios = [
  "3 / 4",
  "4 / 3",
  "3 / 4",
  "4 / 5",
  "1 / 1",
  "4 / 3",
];

export default function PhotoGrid() {
  return (
    <MasonryGrid
      columns={3}
      m={{ columns: 2 }}
      s={{ columns: 1 }}
      xs={{ columns: 1 }}
      gap="12"
    >
      {images.map((src, i) => (
        <Lens key={i}>
          <Media
            src={src}
            alt=""
            className="rounded-2xl"
            unoptimized
            aspectRatio={aspectRatios[i]}
          />
        </Lens>
      ))}
    </MasonryGrid>
  );
}
