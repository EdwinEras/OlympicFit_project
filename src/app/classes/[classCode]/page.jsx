"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { classesData } from "../../../lib/classesData";
import { mediaData } from "../../../lib/mediaData";

export default function ClassDetailsPage() {
  const { classCode } = useParams();

  const classDetails = classesData.find(
    (item) => item.class_code === classCode
  );

  if (!classDetails) {
    return <div className="p-6 text-red-500">Class not found!</div>;
  }

  const mediaInfo = mediaData.find(
    (media) => media.media_code === classDetails.media_code
  );

  const imagePath = mediaInfo
    ? `/images/${mediaInfo.media_path}`
    : "/images/default.jpg";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{classDetails.class_name}</h1>

      <Image
        src={imagePath}
        alt={classDetails.class_name}
        width={400}
        height={250}
        className="object-cover rounded-lg mt-4"
      />

      <p className="mt-4">{classDetails.description}</p>

      <div className="mt-6">
        <p>
          <strong>Category:</strong> {classDetails.category}
        </p>
        <p>
          <strong>Difficulty Level:</strong> {classDetails.difficulty_level}
        </p>
        <p>
          <strong>Capacity:</strong> {classDetails.capacity} people
        </p>
        <p>
          <strong>Schedule:</strong> {classDetails.schedule.start_time} -{" "}
          {classDetails.schedule.end_time} at {classDetails.schedule.location}
        </p>
      </div>
    </div>
  );
}
