/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/
"use client"
import Banner from "../../components/ui/Banner";
import bannerImages from "../../lib/bannerImages";
import FinisedClasses from "./FinishedClasses";
import UpcomingClasses from "./UpcomingClasses";
import { getClasses } from "../../routes/classes"
import { useState, useEffect } from "react";

export default function DashMember() {
  const [upClass, setUpClass] = useState([]);
  const [finClass, setFinClass] = useState([]);

  useEffect(()=>{
    const loadUsers = async () => {
      const res = await getClasses();
      setUpClass(res);
      setFinClass(res);
    }
    loadUsers();
  },[]);

  const arrClasses = [
    { id: 1, name: "Yoga 1", description: "This is the description for Yoga 1", active: "yes", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Regular", capacity:10, location:"In person", media:"http://example.com"},
    { id: 2, name: "Zumba 1", description: "This is the description for Zumba 1", active: "no", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Intermedia", capacity:5, location:"Online", media:"http://example.com"},
    { id: 3, name: "Cardio 1", description: "This is the description for Cardio 1", active: "yes", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Advance", capacity:15, location:"In person", media:"http://example.com"}
  ];

  return (
    <main className="min-h-screen">
      <Banner bgImage={bannerImages.dashboard} title="Member Dashboard"/>
      <UpcomingClasses arrClasses={upClass}/>
      <FinisedClasses arrClasses={finClass}/>
    </main>
  );
}
