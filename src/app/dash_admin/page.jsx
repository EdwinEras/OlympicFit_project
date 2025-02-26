"use client";

import Banner from "../../components/ui/Banner";
import ManageClass from "./ManageClass";
import ManageTrainner from "./ManageTrainner";
import ManageMembers from "./ManageMembers";


export default function DashAdmin() {
  const arrClasses = [
    { id: 1, name: "Yoga 1", description: "this is the descoption for Yoga 1", active: "yes", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Regular", capacity:10, location:"In person", media:"http://example.com"},
    { id: 2, name: "Zumba 1", description: "this is the descoption for Zumba 1", active: "no", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Intermedia", capacity:5, location:"Online", media:"http://example.com"},
    { id: 3, name: "Cardio 1", description: "this is the descoption for Cardio 1", active: "yes", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Advance", capacity:15, location:"In person", media:"http://example.com"},
  ];

  return (
    <main className="min-h-screen items-center justify-center">
      <Banner bgImage="/images/pricing-image.webp" title="Admin Dashboard" />
      <ManageClass arrClasses={arrClasses}/>
      <ManageTrainner arrTrainners={arrClasses}/>
      <ManageMembers arrMembers={arrClasses}/>
    </main>
  );
}
