"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getClasses } from "../../../routes/classes";
import { getMedias } from "../../../routes/media";
import { getUsers, updateUserById } from "../../../routes/users";
import { getReviews } from "../../../routes/reviews";
import { calculateDuration } from "../../../lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { User } from "lucide-react";
import "swiper/css";
import { redirect } from "next/navigation";

const findItemByKey = (array, key, value) => {
  return array.find((item) => item[key] === value);
};

export default function ClassDetailsPage() {
  const minDate = new Date().toISOString().slice(0, 16);
  const { classCode } = useParams();
  const searchParams = useSearchParams();
  const scheduleId = searchParams.get("schedule_id");
  const [scheduleData, setScheduleData] = useState(null);
  const [classDetails, setClassDetails] = useState(null);
  const [mediaInfo, setMediaInfo] = useState(null);
  const [trainer, setTrainer] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [logUser, setLogUser] = useState();

  const [fullDateTime, setFullDateTime] = useState("");
  const [timeOnly, setTimeOnly] = useState("");

  useEffect(() => {
    const usr = getFromLocalStorage("user");
    setLogUser(usr);

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
          return (
            Array.isArray(review.schedule_id) &&
            review.schedule_id.some((id) => id === classDetails._id)
          );
        });

        setClassDetails(classDetails);
        setScheduleData(schedule);
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

  async function bookScheduleUser() {
    const isClassAlreadyBooked = logUser.booked_classes?.some(
      (booking) =>
        booking.class_id === classDetails._id &&
        booking.schedule_id === scheduleId
    );

    if (isClassAlreadyBooked) {
      alert("You have already booked this class. Please check your dashboard.");
      return;
    }

    var formData = {
      class_id: classDetails._id,
      schedule_id: scheduleId,
      booked_on: minDate,
    };
    if (!logUser.booked_classes) {
      logUser.booked_classes = [];
    }
    logUser.booked_classes.push(formData);
    formData = logUser;
    console.log(logUser);
    const res = await updateUserById(logUser._id, formData);
    console.log(res);
    if (res.acknowledged) {
      saveToLocalStorage("user", logUser);
      alert("Class successfully booked! Check your dashboard for details.");
    }
  }

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const saveToLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

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
              <h2 className="text-lg font-bold p-4 uppercase">Reviews</h2>
              <div className="bg-old-black py-6 px-4">
                {reviews.length === 0 ? (
                  <p className="text-off-white text-left text-sm">
                    There are no reviews yet.
                  </p>
                ) : (
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    className="text-left flex overflow-hidden"
                  >
                    {reviews.map((review) => {
                      const user = users.find((u) => u._id === review.user_id);
                      return (
                        <SwiperSlide key={review._id}>
                          <div>
                            <p className="text-brand-200 text-sm mb-4 flex items-center gap-2">
                              <User size={16} />
                              {user
                                ? `${user.first_name} ${user.last_name}`
                                : "Anonymous"}
                            </p>
                            <p className="text-brand-200 text-sm">
                              {review.feedback}
                            </p>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                          <strong>Time:</strong>
                          {scheduleData?.start_time?.split("T")[1] || "N/A"} -
                          {scheduleData?.end_time?.split("T")[1] || "N/A"}
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
                    <button
                      onClick={bookScheduleUser}
                      className="py-2.5 px-4 justify-self-center flex text-white rounded uppercase bg-gradient-to-b from-silver-slate border border-silver-slate to-old-black"
                    >
                      Book Now
                    </button>
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
