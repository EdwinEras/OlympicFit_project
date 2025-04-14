"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getClasses } from "../../../routes/classes";
import { getMedias } from "../../../routes/media";
import { getUsers } from "../../../routes/users";
import { getReviews } from "../../../routes/reviews";
import { calculateDuration } from "../../../lib/utils";

const findItemByKey = (array, key, value) => {
  return array.find((item) => item[key] === value);
};

export default function ClassDetailsPage() {
  const { classCode } = useParams();
  const searchParams = useSearchParams();
  const scheduleId = searchParams.get("schedule_id");
  const [scheduleData, setScheduleData] = useState(null);
  const [classDetails, setClassDetails] = useState(null);
  const [mediaInfo, setMediaInfo] = useState(null);
  const [trainer, setTrainer] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [classesData, mediaData, usersData, reviewsData] =
          await Promise.all([
            getClasses(),
            getMedias(),
            getUsers(),
            getReviews(),
          ]);

        const classDetails = findItemByKey(
          classesData,
          "class_code",
          classCode
        );
        if (!classDetails) return;

        const mediaInfo = classDetails.media_code?.length
          ? findItemByKey(mediaData, "media_code", classDetails.media_code[0])
          : null;

        const trainer = findItemByKey(
          usersData,
          "_id",
          classDetails.trainer_id
        );

        let schedule = null;
        if (scheduleId && classDetails?.schedule?.length) {
          schedule = classDetails.schedule.find((s) => s._id === scheduleId);
        }

        const filteredReviews = reviewsData.filter((review) => {
          return schedule && review.schedule_id.includes(schedule._id);
        });

        setClassDetails(classDetails);
        setScheduleData(schedule);
        console.log("Schedule Data:", scheduleData);

        setMediaInfo(mediaInfo);
        setTrainer(trainer);
        setUsers(usersData);
        setReviews(filteredReviews);
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };

    fetchData();
  }, [classCode, scheduleId]);

  if (!classDetails)
    return <div className="p-6 text-red-500">Class not found!</div>;

  const imagePath = mediaInfo ? mediaInfo.media_path : "/images/default.jpg";
  const duration =
    scheduleData?.start_time && scheduleData?.end_time
      ? calculateDuration(scheduleData.start_time, scheduleData.end_time)
      : null;

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-32 px-6 lg:p-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="relative w-full h-[400px]">
              <img
                src={imagePath}
                alt={classDetails.class_name}
                className="w-full h-full object-cover rounded-lg"
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
              <div>
                {reviews.length === 0 ? (
                  <p className="bg-old-black py-6 px-4 text-off-white text-left text-sm">
                    No reviews yet.
                  </p>
                ) : (
                  reviews.map((review) => {
                    const user = users.find((u) => u._id === review.user_id);
                    return (
                      <div
                        key={review._id}
                        className="border-b border-gray-700 pb-4"
                      >
                        <p className="font-semibold text-off-white">
                          {user
                            ? `${user.first_name} ${user.last_name}`
                            : "Anonymous"}
                        </p>
                        <p className="mt-1">{review.comment}</p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg shadow flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mt-4">
                <img
                  src={
                    trainer?.media ? `${trainer.media}` : "/images/default.jpg"
                  }
                  alt={trainer ? trainer.first_name : "Trainer"}
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
                  {trainer?.employee?.description || "Trainer Description"}
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow">
              <h2 className="text-lg font-bold p-4 uppercase">
                Class Information
              </h2>
              <div className="bg-old-black py-6 px-4">
                <ul className="space-y-4 text-off-white">
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
                      <ul className="space-y-4 text-off-white">
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
                        <li>
                          <strong>Duration:</strong>{" "}
                          {duration || "Not available"} min
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
                <div className="flex gap-4 justify-center align-center mt-8">
                  {!scheduleData ? (
                    <Link
                      href="/classesplan"
                      className="py-2.5 px-4 justify-self-center flex text-white rounded uppercase bg-gradient-to-b from-silver-slate border border-silver-slate to-old-black"
                    >
                      See Schedule
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="py-2.5 px-4 justify-self-center flex text-white rounded uppercase bg-gradient-to-b from-silver-slate border border-silver-slate to-old-black"
                    >
                      Book Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
