"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import ReviewClass from "./ReviewClass";

const FinisedClasses = ({arrClasses}) => {
    const [classUp, setClassUp] = useState(false);
    const [show, setShow] = useState();

    return(
        <div className="relative m-4 mx-auto w-[85%] bg-gray-300 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">Finished Classes</h2>
          <button 
            className="bg-gray-400 px-2 py-1 rounded hover:bg-gray-500"
            onClick={() => setClassUp(!classUp)}>
            {classUp ? <ArrowUp /> : <ArrowDown />}
          </button>
        </div>
        {classUp && (
          <div className="flex flex-col gap-2">
            {arrClasses.map((c) => (
              <div key={c.id} className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
                <p className="text-sm">{c.id} - {c.name} - {c.start_time} - {c.end_time}</p>
                <div className="flex gap-2">
                  <button 
                  onClick={() => {setShow(`del_c${c.id}`)}}
                  className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600">
                    Review
                  </button>
                  {show===`del_c${c.id}` && (<ReviewClass setShow={setShow} revClass={c} />)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}

export default FinisedClasses;