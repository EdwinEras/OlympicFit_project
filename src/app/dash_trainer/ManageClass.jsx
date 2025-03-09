"use client";
import { ArrowDown, ArrowUp, Pencil, X } from "lucide-react";
import CardEditClass from "../dash_admin/CardEditClass";
import CardCreateClass from "../dash_admin/CardCreateClass";
import { useState } from "react";

const ManageClass = ({ arrClasses }) => {
  const [classUp, setClassUp] = useState(true);
  const [show, setShow] = useState();

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-2xl font-semibold">Manage Classes</h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setClassUp(!classUp)}
        >
          {classUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {classUp && (
        <div className="flex flex-col gap-6">
          <button
            onClick={() => {
              setShow("create_class");
            }}
            className="bg-midnights/90 px-4 py-2 mt-8 rounded text-white hover:bg-midnights"
          >
            Add Class
          </button>
          {show === "create_class" && <CardCreateClass setShow={setShow} />}
          {arrClasses.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
            >
              <p className="text-sm">
                {c.id} - {c.name} - {c.start_time} - {c.end_time} - {c.active}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShow(`edit_c${c.id}`);
                  }}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  <Pencil />
                </button>
                {show === `edit_c${c.id}` && (
                  <CardEditClass setShow={setShow} editClass={c} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageClass;
