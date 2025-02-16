import Image, { StaticImageData } from "next/image";

export function HighlightCard({
  image,
  logo,
  aspectRatio,
}: {
  aspectRatio: string;
  image: StaticImageData;
  logo: React.ReactNode;
}) {
  return (
    <div
      className="w-full relative cursor-pointer group"
      style={{
        aspectRatio,
      }}
    >
      <Image src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10 transition-opacity duration-300 opacity-0 hover:opacity-100" />
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-5 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
        {logo}
      </div>
    </div>
  );
}
