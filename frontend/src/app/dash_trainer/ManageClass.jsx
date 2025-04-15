"use client";
import { ArrowDown, ArrowUp, Pencil } from "lucide-react";
import CardEditClass from "../dash_admin/CardEditClass";
import CardCreateClass from "../dash_admin/CardCreateClass";
import { useEffect, useState } from "react";
import { getUsers } from "../../routes/users";

const ManageClass = ({ arrClasses, trainerId }) => {
  const [classUp, setClassUp] = useState(true);
  const [show, setShow] = useState();
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

  const findTrainerById = (id) => {
    return trainers.find((t) => t._id === id);
  };
  const filteredClasses = arrClasses.filter((c) => c.trainer_id === trainerId);

  
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
          {filteredClasses.map((c, index) => {
            const trainer = findTrainerById(c.trainer_id);

            return (
              <div
                key={c._id}
                className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
              >
                <p className="text-sm">
                  {index + 1} - {c.class_name} - {c.category} -{" "}
                  {c.difficulty_level} - {c.is_active ? "Active" : "Inactive"} -{" "}
                  {trainer
                    ? `${trainer.first_name} ${trainer.last_name}`
                    : "Unknown"}
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
