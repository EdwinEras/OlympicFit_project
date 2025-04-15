"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useState, useEffect } from "react";
import { getUsers } from "../../routes/users";

const UpcomingClasses = ({ arrClasses, arrSc }) => {
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
    const trainer = trainers.find((t) => t._id === trainerId);
    return trainer ? `${trainer.first_name} ${trainer.last_name}` : "Unknown";
  };

  const getDetailsLink = (classCode, scheduleId) =>
    `/classes/${classCode}?schedule_id=${scheduleId}`;

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Booked Classes
        </h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setClassUp((prev) => !prev)}
        >
          {classUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      {classUp && (
        <div className="flex flex-col gap-6 mt-6">
          <Link
            href="/classes"
            className="text-center bg-midnights/90 px-4 py-2 rounded text-white hover:bg-midnights"
          >
            Add Classes
          </Link>

          {arrClasses.flatMap(
            (c, classIndex) =>
              c.schedule?.map((schedule, scheduleIndex) => {
                const trainerName = findTrainerById(c.trainer_id);
                return (
                  <div
                    key={`${c._id}_${scheduleIndex}`}
                    className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
                  >
                    <p className="text-sm">
                      {classIndex + 1} - {c.class_name} - {c.difficulty_level} -{" "}
                      {schedule.day} - {schedule.start_time} to{" "}
                      {schedule.end_time} at {schedule.location} - {trainerName}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href={getDetailsLink(c.class_code, schedule._id)}
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
              }) ?? []
          )}
        </div>
      )}
    </div>
  );
};

export default UpcomingClasses;
