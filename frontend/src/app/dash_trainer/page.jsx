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
import ManageClass from "./ManageClass";
import { getClasses } from "../../routes/classes"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function DashTrainer() {
  const [arrClasses, setArrClasses] = useState([]);

  useEffect(()=>{
    const loadClasses = async () => {
      const user = getFromLocalStorage("user");
      redirectLoggedUser(user);
      const res = await getClasses();
      setArrClasses(res);
    }
    loadClasses();
  },[]);

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const redirectLoggedUser = (user) =>{
    if (user?.employee?.role === "trainer") {
      console.log("you are the trainer");
    }else{
      redirect("/home");
    }
  };

  return (
    <main className="min-h-screen">
      <Banner bgImage={bannerImages.dashboard} title="Trainer Dashboard"/>
      <ManageClass arrClasses={arrClasses}/>
    </main>
  );
}
