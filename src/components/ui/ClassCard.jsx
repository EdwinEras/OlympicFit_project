import Image from "next/image";
import Link from "next/link";

export default function ClassCard({ classData, mediaInfo }) {
  return (
    <div className="relative grid place-items-center group">
      <div className="relative w-full h-96 overflow-hidden rounded-2xl">
        <Image
          src={
            mediaInfo
              ? `/images/${mediaInfo.media_path}`
              : "/images/default.jpg"
          }
          alt={classData.class_name}
          fill
          className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 grid place-items-center rounded-2xl px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-off-white uppercase text-xl md:text-2xl font-bold mb-4 group-hover:-translate-y-4 transition-all duration-300">
              {classData.class_name}
            </h3>
            <Link
              href={`/classes/${classData.class_code}`}
              className="text-md  cursor-pointer font-bold px-6 py-3 text-gray-200 border border-gray-800 rounded-lg focus:outline-none uppercase focus:shadow-outline bg-gradient-to-b from-silver-slate to-black transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
