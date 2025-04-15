"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import ReviewClass from "./ReviewClass";
import { getUsers } from "../../routes/users";

const FinisedClasses = ({ arrClasses, arrSc }) => {
  const [classUp, setClassUp] = useState(false);
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

  const findTrainerById = (trainerId) => {
    return trainers.find((trainer) => trainer._id === trainerId);
  };

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Finished Classes
        </h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setClassUp(!classUp)}
        >
          {classUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {classUp && (
        <div className="flex flex-col gap-6 mt-4">
          {arrClasses.map((c, index) => {
            const trainer = findTrainerById(c.trainer_id);

            return (
              <div
                key={c._id}
                className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
              >
                <p className="text-sm">
                  {index + 1} - {c.class_name} - {c.difficulty_level} -{" "}
                  {trainer
                    ? `${trainer.first_name} ${trainer.last_name}`
                    : "Unknown"}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setShow(`del_c${c._id}`);
                    }}
                    className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500 text-white"
                  >
                    Review
                  </button>
                  {show === `del_c${c._id}` && (
                    <ReviewClass setShow={setShow} revClass={c} />
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

export default FinisedClasses;
