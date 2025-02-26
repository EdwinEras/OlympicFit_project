/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/
import ClassesBanner from "./ClassesBanner";

export const metadata = {
  title: "Olympic Fit - Classes",
};

export default function Classes() {
  return (
    <main className="min-h-screen">
      <ClassesBanner />
    </main>
  );
}
