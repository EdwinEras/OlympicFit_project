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
import ManageClass from "./ManageClass";
import ManageTrainner from "./ManageTrainer";
import ManageMembers from "./ManageMembers";
import { getUsers } from "../../routes/users"
import { getClasses } from "../../routes/classes"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function DashAdmin() {
  const [arrUsers, setArrUsers] = useState([]);
  const [arrClasses, setArrClasses] = useState([]);

  useEffect(()=>{  
    const user = getFromLocalStorage("user");
    redirectLoggedUser(user);
    const loadUsers = async () => {
      const res = await getUsers();
      setArrUsers(res.data);
      const restt = await getClasses();
      setArrClasses(restt.data);
    }
    loadUsers();
  },[]);

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const redirectLoggedUser = (user) =>{
    if (user?.employee?.role === "admin") {
      console.log("you are the admin");
    }else{
      redirect("/home");
    }
  };

  return (
    <main className="min-h-screen items-center justify-center">
      <Banner bgImage={bannerImages.dashboard} title="Admin Dashboard" />
        <ManageClass arrClasses={arrClasses} />
        <ManageTrainner arrTrainers={arrUsers} />
        <ManageMembers arrMembers={arrUsers}/>
    </main>
  );
}
