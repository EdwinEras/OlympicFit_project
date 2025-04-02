"use client";
import { ArrowDown, ArrowUp, Pencil, Trash } from "lucide-react";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useState } from "react";
import CardCreateTrainer from "./CardCreateTrainer";
import CardEditTrainer from "./CardEditTrainer";

const ManageTrainner = ({arrTrainers}) => {
  const [trainerUp, setTrainerUp] = useState(false);
  const [show, setShow] = useState();
  const [ans, setAns] = useState();

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Manage Trainner
        </h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setTrainerUp(!trainerUp)}
        >
          {trainerUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {trainerUp && (
        <div className="flex flex-col gap-6">
          <button
            onClick={() => {
              setShow("create_t");
            }}
            className="bg-midnights/90 px-4 py-2 mt-8 rounded text-white hover:bg-midnights"
          >
            Add Trainner
          </button>
          {show === "create_t" && <CardCreateTrainer setShow={setShow} />}
          {arrTrainers.map((t, index) => (
            <div
              key={t._id}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
            >
              <p className="text-sm">
              {index+1} - {t.first_name} {t.last_name} - {t.phone_number} - {t.email}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShow(`edit_t${t._id}`);
                  }}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  <Pencil />
                </button>
                {show === `edit_t${t._id}` && (
                  <CardEditTrainer setShow={setShow} editTrainer={t} />
                )}
                <button
                  onClick={() => {
                    setShow(`del_t${t._id}`);
                  }}
                  className="bg-red/90 px-2 py-1 rounded hover:bg-red text-white"
                >
                  <Trash />
                </button>
                {show === `del_t${t._id}` && (
                  <ConfirmDelete
                    setShow={setShow}
                    user={t}
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

export default ManageTrainner;
