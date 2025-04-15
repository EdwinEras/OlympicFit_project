"use client";
import { ArrowDown, ArrowUp, Pencil, Trash } from "lucide-react";
import CardEditClass from "./CardEditClass";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import CardCreateClass from "./CardCreateClass";
import { getUsers } from "../../routes/users";
import { useState, useEffect } from "react";

const ManageClass = ({ arrClasses }) => {
  const [classUp, setClassUp] = useState(false);
  const [show, setShow] = useState();
  const [ans, setAns] = useState();
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const users = await getUsers();
        setTrainers(users);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, []);

  const findTrainerById = (trainerId) => {
    const trainer = trainers.find((t) => t._id === trainerId);
    return trainer ? `${trainer.first_name} ${trainer.last_name}` : "Unknown";
  };

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Manage Classes
        </h2>
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
          {arrClasses.map((c, index) => {
            const trainerName = findTrainerById(c.trainer_id);

            return (
              <div
                key={c._id}
                className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
              >
                <p className="text-sm">
                  {index + 1} - {c.class_name} - {c.category} -{" "}
                  {c.difficulty_level} - {trainerName}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setShow(`edit_c${c._id}`);
                    }}
                    className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    <Pencil />
                  </button>
                  {show === `edit_c${c._id}` && (
                    <CardEditClass setShow={setShow} editClass={c} />
                  )}
                  <button
                    onClick={() => {
                      setShow(`del_c${c._id}`);
                    }}
                    className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
                  >
                    <Trash />
                  </button>
                  {show === `del_c${c._id}` && (
                    <ConfirmDelete
                      setShow={setShow}
                      dbObject={c}
                      setAns={setAns}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ManageClass;
