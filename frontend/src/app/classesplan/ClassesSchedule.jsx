"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getClasses } from "../../routes/classes";
import { getUsers } from "../../routes/users";
import { calculateDuration } from "../../lib/utils";

const dayOrder = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function ClassesSchedule() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [classesResponse, usersResponse] = await Promise.all([
          getClasses(),
          getUsers(),
        ]);

        const classes = classesResponse;
        const fetchedUsers = usersResponse;

        const schedule = classes.reduce((acc, classItem) => {
          const trainer = fetchedUsers.find(
            (user) => user._id === classItem.trainer_id
          );

          classItem.schedule?.forEach(
            ({ day = "Unknown", start_time, end_time, location, _id }) => {
              const classEntry = {
                name: classItem.class_name,
                class_code: classItem.class_code,
                duration: calculateDuration(start_time, end_time),
                start_time,
                end_time,
                location,
                day,
                time: `${start_time} - ${end_time}`,
                trainer: trainer
                  ? `${trainer.first_name} ${trainer.last_name}`
                  : "Unknown",
                schedule_id: _id,
              };

              const dayEntry = acc.find((d) => d.day === day);
              dayEntry
                ? dayEntry.classes.push(classEntry)
                : acc.push({ day, classes: [classEntry] });
            }
          );

          return acc;
        }, []);

        schedule.sort(
          (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
        );
        setScheduleData(schedule);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg hidden lg:table">
          <thead>
            <tr className="bg-gradient-to-b from-silver-slate border border-silver-slate to-old-black text-white">
              {scheduleData.map((day, index) => (
                <th key={index} className="p-3 text-center border">
                  {day.day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {scheduleData.map((day, index) => (
                <td
                  key={index}
                  className="p-3 border-silver-slate border align-top"
                >
                  {day.classes.length > 0 ? (
                    <div className="space-y-2">
                      {day.classes.map((cls, idx) => (
                        <Link
                          key={idx}
                          href={{
                            pathname: `/classes/${cls.class_code}`,
                            query: {
                              schedule_id: cls.schedule_id,
                            },
                          }}
                          className="block"
                        >
                          <div className="cursor-pointer bg-gradient-to-b from-silver-slate border border-silver-slate to-midnights text-white p-2 rounded-md shadow-sm text-center">
                            <p className="font-semibold text-brand-200 text-sm">
                              {cls.name} <br />({cls.duration} min)
                            </p>
                            <p className="text-sm text-gray-400">{cls.time}</p>
                            <p className="text-xs text-gray-400">
                              With: <br /> {cls.trainer}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-center">No classes</p>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
