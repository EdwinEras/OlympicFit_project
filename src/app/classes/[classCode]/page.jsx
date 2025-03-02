"use client";

import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { classesData } from "../../../lib/classesData";
import { mediaData } from "../../../lib/mediaData";
import { users } from "../../../lib/userData";

export default function ClassDetailsPage() {
  const { classCode } = useParams();
  const searchParams = useSearchParams();
  const scheduleData = searchParams.get("schedule")
    ? JSON.parse(searchParams.get("schedule"))
    : null;
  const classDetails = classesData.find(
    (item) => item.class_code === classCode
  );
  if (!classDetails)
    return <div className="p-6 text-red-500">Class not found!</div>;

  const mediaInfo = mediaData.find(
    (media) => media.media_code === classDetails.media_code
  );
  const imagePath = mediaInfo
    ? `/images/${mediaInfo.media_path}`
    : "/images/default.jpg";

  const trainer = users.find(
    (user) =>
      user.role === "trainer" &&
      Array.isArray(user.trainer_details?.assigned_classes) &&
      user.trainer_details.assigned_classes.some((classItem) =>
        typeof classItem === "string"
          ? classItem.toLowerCase() === classDetails.class_name.toLowerCase()
          : classItem.name?.toLowerCase() ===
            classDetails.class_name.toLowerCase()
      )
  );

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-32 px-6 lg:p-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="relative w-full h-[400px]">
              <Image
                src={imagePath}
                alt={classDetails.class_name}
                fill
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg shadow">
              <h2 className="text-lg font-bold p-4 uppercase">Class Details</h2>
              <p className="text-brand-200 text-sm bg-old-black px-4 py-6">
                {classDetails.description}
              </p>
            </div>

            <div className="rounded-lg shadow">
              <h2 className="text-lg font-bold p-4 uppercase">Comments</h2>
              <p className="text-brand-200 text-sm bg-old-black px-4 py-6">
                You must be logged in to{" "}
                <Link href="/login" className="underline">
                  log in
                </Link>{" "}
                to post a comment.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg shadow flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={
                    trainer?.image
                      ? `/images/${trainer.image}`
                      : "/images/default.jpg"
                  }
                  alt={trainer ? trainer.first_name : "Trainer"}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold p-4 uppercase">
                  {trainer
                    ? `${trainer.first_name} ${trainer.last_name}`
                    : "Trainer Name"}
                </h3>
                <p className="bg-old-black py-6 px-4 text-off-white text-left text-sm">
                  {trainer?.trainer_details?.description ||
                    "Trainer Description"}
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow">
              <h2 className="text-lg font-bold p-4 uppercase">
                Class Information
              </h2>
              <div className="bg-old-black py-6 px-4">
                <ul className="space-y-2 text-off-white">
                  <li>
                    <strong>Class Name:</strong> {classDetails.class_name}
                  </li>
                  <li>
                    <strong>Category:</strong> {classDetails.category}
                  </li>
                  <li>
                    <strong>Level:</strong> {classDetails.difficulty_level}
                  </li>
                  <li>
                    {scheduleData && (
                      <ul className="space-y-2 text-off-white">
                        <li>
                          <strong>Time:</strong> {scheduleData.start_time} -{" "}
                          {scheduleData.end_time}
                        </li>
                        <li>
                          <strong>Location:</strong>{" "}
                          {scheduleData.location || "Not specified"}
                        </li>
                        <li>
                          <strong>Day:</strong>{" "}
                          {scheduleData.day || "Not available"}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <strong>Duration:</strong> 60min
                  </li>
                </ul>
                <button className="py-2.5 px-4 mt-4 justify-self-center flex text-white rounded uppercase bg-gradient-to-b from-silver-slate border border-silver-slate to-old-black">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
