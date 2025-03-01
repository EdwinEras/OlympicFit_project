"use client";
import React from "react";

const scheduleData = [
  {
    day: "Monday",
    classes: [
      {
        name: "Basic",
        duration: 60,
        time: "10:30 - 11:30",
        trainer: "TrainerName",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        name: "Basic",
        duration: 60,
        time: "11:30 - 12:30",
        trainer: "TrainerName",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        name: "Intermediate",
        duration: 60,
        time: "13:30 - 14:30",
        trainer: "TrainerName",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        name: "Basic",
        duration: 60,
        time: "12:30 - 13:30",
        trainer: "TrainerName",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        name: "Advance",
        duration: 60,
        time: "10:30 - 11:30",
        trainer: "TrainerName",
      },
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        name: "Intermediate",
        duration: 60,
        time: "11:30 - 12:30",
        trainer: "TrainerName",
      },
      {
        name: "All Level",
        duration: 60,
        time: "12:30 - 13:30",
        trainer: "TrainerName",
      },
    ],
  },
  {
    day: "Sunday",
    classes: [
      {
        name: "Basic",
        duration: 60,
        time: "10:30 - 11:30",
        trainer: "TrainerName",
      },
    ],
  },
];

export default function ClassesSchedule() {
  return (
    <div className="container mx-auto p-6 lg:p-10">
      <div className="overflow-x-auto">
        {/* Table for larger screens */}
        <table className="min-w-full shadow-md rounded-lg hidden sm:table">
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
                        <div
                          key={idx}
                          className="bg-gradient-to-b from-silver-slate border border-silver-slate to-midnights text-white p-2 rounded-md shadow-sm text-center"
                        >
                          <p className="font-semibold text-brand-200 text-sm">
                            {cls.name} <span>({cls.duration} min)</span>
                          </p>
                          <p className="text-sm text-gray-400">{cls.time}</p>
                          <p className="text-xs text-gray-400">
                            With: <br /> {cls.trainer}
                          </p>
                        </div>
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

        {/* Stack layout for smaller screens */}
        <div className="sm:hidden space-y-4">
          {scheduleData.map((day, index) => (
            <div
              key={index}
              className="bg-midnights text-white rounded-lg p-4 shadow-md"
            >
              <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
                {day.day}
              </h3>
              <div className="mt-2">
                {day.classes.length > 0 ? (
                  day.classes.map((cls, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-b from-silver-slate border border-silver-slate to-midnights text-white p-3 rounded-md shadow-sm my-4"
                    >
                      <p className="font-semibold text-brand-200 text-sm">
                        {cls.name} <span>({cls.duration} min)</span>
                      </p>
                      <p className="text-sm text-gray-400">{cls.time}</p>
                      <p className="text-xs text-gray-400">
                        With: <br /> {cls.trainer}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No classes</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
