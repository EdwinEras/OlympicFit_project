import Image from "next/image";

export default function Banner({ bgImage, title }) {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center text-white">
      <Image
        src={bgImage}
        alt={title}
        priority
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-[#232a2c]/50 z-10"></div>
      <div className="container text-center w-[85%] z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
