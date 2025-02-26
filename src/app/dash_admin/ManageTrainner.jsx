"use client";
import { ArrowDown, ArrowUp, Pencil, X } from "lucide-react";
import CardEditClass from "./CardEditClass";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import CardCreateClass from "./CardCreateClass";
import { useState } from "react";

const ManageTrainner = ({arrTrainners}) => {
    const [trainerUp, setTrainerUp] = useState(false);
    const [show, setShow] = useState();
    const [ans, setAns] = useState();

    return(
        <div className="relative m-4 mx-auto w-[85%] bg-gray-300 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">Manage Trainner</h2>
          <button 
            className="bg-gray-400 px-2 py-1 rounded hover:bg-gray-500"
            onClick={() => setTrainerUp(!trainerUp)}>
            {trainerUp ? <ArrowUp /> : <ArrowDown />}
          </button>
        </div>
        {trainerUp && (
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => {setShow("create_t")}}
              className="bg-green-600 px-4 py-2 mt-2 rounded text-white hover:bg-green-700">
              Add Trainner
            </button>
            {show==="create_t" && (<CardCreateClass setShow={setShow}/>)}
            {arrTrainners.map((t) => (
              <div key={t.id} className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
                <p className="text-sm">{t.id} - {t.name} - {t.start_time} - {t.end_time} - {t.active}</p>
                <div className="flex gap-2">
                  <button 
                  onClick={() => {setShow(`edit_t${t.id}`)}}
                  className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
                    <Pencil />
                  </button>
                  {show===`edit_t${t.id}` && (<CardEditClass setShow={setShow} editClass={t}/>)}
                  <button 
                  onClick={() => {setShow(`del_t${t.id}`)}}
                  className="bg-pink-500 px-2 py-1 rounded hover:bg-pink-600">
                    <X />
                  </button>
                  {show===`del_t${t.id}` && (<ConfirmDelete setShow={setShow} text={t.name} setAns={setAns} />)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}

export default ManageTrainner;