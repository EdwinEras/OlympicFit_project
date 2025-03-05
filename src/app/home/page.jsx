import Banner from "../../components/ui/Banner";
import bannerImages from "../../lib/bannerImages";
import WhyChooseUs from "./WhyChooseUs";
import Link from "next/link";
import { classesData } from "../../lib/classesData";
import { mediaData } from "../../lib/mediaData";
import ClassCard from "../../components/ui/ClassCard";
import TestimonialCarousel from "./TestimonialCarousel";
import BMICalculator from "./BMICalculator";
 
export default function Home() {
  const data = classesData;
  return (
    <main className="min-h-screen">
      <Banner
        bgImage={bannerImages.home}
        title="Welcome to OlympicFit"
        className="testing"
      />
      <WhyChooseUs />
      <div className="container mx-auto px-10 flex flex-col items-center">
        <div className="text-center max-w-lg">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-6">
            Our Classes
          </h2>
          <p className="text-base">
            Whether you're looking to boost your strength, improve your
            flexibility, or get your heart pumping with some cardio, we have
            something for everyone.
            <Link href="/classes" className="text-silver-slate underline">
              View More
            </Link>
            to explore our full class offerings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-12">
          {data.slice(0, 3).map((classItem) => {
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
      <TestimonialCarousel/>
      <BMICalculator/>
    </main>
  );
}