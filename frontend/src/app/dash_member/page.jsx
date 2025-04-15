/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/
"use client";
import Banner from "../../components/ui/Banner";
import bannerImages from "../../lib/bannerImages";
import FinisedClasses from "./FinishedClasses";
import UpcomingClasses from "./UpcomingClasses";
import { getClassById } from "../../routes/classes";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function DashMember() {
  const [upClass, setUpClass] = useState([]);
  const [finClass, setFinClass] = useState([]);
  const [upSch, setUpSch] = useState([]);
  const [finSch, setFinSch] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const user = getFromLocalStorage("user");
      redirectLoggedUser(user);
      clasifyClasses(user.booked_classes, true);
      clasifyClasses(user.last_booked_classes, false);
    };

    loadUsers();
  }, []);

  const clasifyClasses = async (array, type) =>{ 
    if(array.length > 0){
      let arrClass=[];
      for(let i=0; i<array.length; i++){
        let idC = array[i].class_id
        let objC = await getClassById(idC);
        for(let j=0; j<objC.schedule.length; j++){
          if(objC.schedule[j]._id===array[i].schedule_id){
            arrClass.push(objC);
          }
        }
      }
      console.log(arrClass)
      if(type){
        setUpClass(arrClass)
      }else{
        setFinClass(arrClass)
      }
    }
  } 

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const redirectLoggedUser = (user) => {
    if (user?.employee === null) {
      console.log("you are the member");
    } else {
      redirect("/home");
    }
  };

  return (
    <main className="min-h-screen">
      <Banner bgImage={bannerImages.dashboard} title="Member Dashboard" />
      <UpcomingClasses arrClasses={upClass} />
      <FinisedClasses arrClasses={finClass} />
    </main>
  );
}
