import React from "react";

export default function Banner({ bgImage, title }) {
  return (
      <div
        className="relative min-h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase">{title}</h1>
        </div>
      </div>
  );
}
