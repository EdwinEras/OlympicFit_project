"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useState, useEffect } from "react";
import { getUsers } from "../../routes/users";

const UpcomingClasses = ({ arrClasses }) => {
  const [classUp, setClassUp] = useState(true);
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
    return trainers.find((trainer) => trainer._id === trainerId);
  };

  console.log(arrClasses);
  
  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Upcoming Classes
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
          <a
            href="/classes"
            className="text-center bg-midnights/90 px-4 py-2 mt-8 rounded text-white hover:bg-midnights"
          >
            Add Classes
          </a>
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
                  <Link
                    href={`/classes/${c.class_code}`}
                    className="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500 text-white"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => setShow(`del_c${c._id}`)}
                    className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
                  >
                    Cancel
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

export default UpcomingClasses;
