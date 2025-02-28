/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/
import TeamList from "./TeamList";
import Banner from "../../components/ui/Banner";
import bannerImages from "../../lib/bannerImages";

export const metadata = {
  title: "Olympic Fit - About",
};

export default function About({ params }) {
  return (
      <main className="min-h-screen">
        <Banner bgImage={bannerImages.about} title="About Us"/>
        <TeamList />
      </main>
  );
}
