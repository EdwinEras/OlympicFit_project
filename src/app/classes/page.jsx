/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/
import React from "react";
import Banner from "../../components/ui/Banner";
import bannerImages from "../../lib/bannerImages";
import { classesData } from "../../lib/classesData";
import { mediaData } from "../../lib/mediaData";
import ClassCard from "../../components/ui/ClassCard";

export const metadata = {
  title: "Olympic Fit - Classes",
};

export default async function Classes() {
  const data = classesData;

  return (
    <main className="min-h-screen">
      <Banner bgImage={bannerImages.classes} title="Classes" />
      <div className="container mx-auto p-10 lg:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((classItem) => {
            const mediaInfo = mediaData.find(
              (media) => media.media_code === classItem.media_code
            );

            return (
              <ClassCard
                key={classItem.class_code}
                classData={classItem}
                mediaInfo={mediaInfo}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
