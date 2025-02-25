"use client"
import { ArrowDown, ArrowUp, Pencil, X } from "lucide-react";
import Banner from "../../components/ui/Banner";
import CardCreateClass from "../../components/createclass/CardCreateClass";
import { useState } from "react";

export default function DashAdmin() {
  const [classUp, setClassUp] = useState(false);
  const [trainerUp, setTrainerUp] = useState(false);
  const [memberUp, setMemberUp] = useState(false);
  const [show, setShow] = useState();

  const arrClasses = [
    { id: 1, name: "yoga 1", schedule: "Monday 9:00-10:30" },
    { id: 2, name: "zumba 1", schedule: "Tuesday 9:00-10:30" },
    { id: 3, name: "cardio 1", schedule: "Wednesday 9:00-10:30" }
  ];

  return (
    <main className="min-h-screen items-center justify-center">
      <Banner bgImage="/images/pricing-image.webp" title="Admin Dashboard" />

      <section className="relative m-4 mx-auto w-[85%] bg-gray-300 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">Manage Classes</h2>
          <button 
            className="bg-gray-400 px-2 py-1 rounded hover:bg-gray-500"
            onClick={() => setClassUp(!classUp)}>
            {classUp ? <ArrowUp /> : <ArrowDown />}
          </button>
        </div>

        {classUp && (
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => {setShow("create_class")}}
              className="bg-green-600 px-4 py-2 mt-2 rounded text-white hover:bg-green-700">
              Add Class
            </button>
            {show==="create_class" && (<CardCreateClass show={show} setShow={setShow}/>)}
            {arrClasses.map((c) => (
              <div key={c.id} className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
                <p className="text-sm">{c.id} - {c.name} - {c.schedule}</p>
                <div className="flex gap-2">
                  <button 
                  className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
                    <Pencil />
                  </button>
                  <button className="bg-pink-500 px-2 py-1 rounded hover:bg-pink-600">
                    <X />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
