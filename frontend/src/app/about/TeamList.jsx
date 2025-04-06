"use client";

import TeamMember from "./TeamMember";
import { getUsers } from "../../routes/users"
import { useEffect, useState } from "react";

export default function TeamList() {
  const [arrUsers, setArrUsers] = useState([]);

  useEffect(()=>{
    const loadUsers = async () => {
      const res = await getUsers()
      console.log(res);
      var arrTeam = [];
      res.forEach(user => {
        if(user.employee !== null){
          if(user.employee.role==="trainer"){
            arrTeam.push(user);
          }
        }
      });
      setArrUsers(arrTeam);
      console.log("Filtered trainers:", arrTeam);

    }
    loadUsers();
  },[])

  return (
    <section className="container py-20 md:py-28 mx-auto w-[85%] flex flex-col items-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">
          Meet Our Team
        </h2>
        <p className="text-base">
          At Olympic Fit, we have a team of dedicated professionals ready to
          guide you on your fitness journey.
          <br />
          <br />
          Whether you’re just starting your fitness journey or looking to push
          your limits, we are here to guide and motivate you every step of the
          way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-20">
        {arrUsers.map((user) => (
          <TeamMember key={user._id} {...user} />
        ))}
      </div>
    </section>
  );
}
