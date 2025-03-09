"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useState } from "react";

const UpcomingClasses = ({ arrClasses }) => {
  const [classUp, setClassUp] = useState(true);
  const [show, setShow] = useState();
  const [ans, setAns] = useState();

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">Upcoming Classes</h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setClassUp(!classUp)}
        >
          {classUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {classUp && (
        <div className="flex flex-col gap-6">
          <a
            href="/classes"
            className="text-center bg-midnights/90 px-4 py-2 mt-8 rounded text-white hover:bg-midnights"
          >
            Add Classes
          </a>
          {arrClasses.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
            >
              <p className="text-sm">
                {c.id} - {c.name} - {c.start_time} - {c.end_time}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShow(`det_c${c.id}`);
                  }}
                  className="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500 text-white"
                >
                  Details
                </button>
                <button
                  onClick={() => {
                    setShow(`del_c${c.id}`);
                  }}
                  className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
                >
                  Cancel
                </button>
                {show === `del_c${c.id}` && (
                  <ConfirmDelete
                    setShow={setShow}
                    text={c.name}
                    setAns={setAns}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingClasses;
