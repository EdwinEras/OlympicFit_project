"use client";
import Banner from "../components/ui/Banner";
import bannerImages from "../lib/bannerImages";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner bgImage={bannerImages.home} title="Welcome to OlympicFit" />
    </main>
  );
}
