import Image from "next/image";
import Link from "next/link";

export default function Banner({ bgImage, title }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <Image
        src={bgImage}
        alt={title}
        priority
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-[#262826]/60 z-10"></div>
      <div className="container text-center md:text-left w-[85%] z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase mb-6">
          {title}
        </h1>
        <p className="text-white/70 max-w-md mb-4">
          Come and train with us in the heart of Berlin. A great community with
          experienced trainers awaits you. Together we will get the best out of
          you.
        </p>
        <Link
          href="/about"
          className="uppercase border px-4 py-2.5 border-red bg-red text-white/80"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
