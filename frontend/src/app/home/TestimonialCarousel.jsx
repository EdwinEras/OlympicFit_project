"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { getReviews } from "../../routes/reviews";
import { getUsers } from "../../routes/users";

import "swiper/css";
import "swiper/css/pagination";

const findItemByKey = (array, key, value) => {
  return array.find((item) => item[key] === value);
};

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [reviewsRes, usersRes] = await Promise.all([getReviews(), getUsers()]);
        if (reviewsRes) {
          setTestimonials(reviewsRes);
        }
        if (usersRes) {
          setUsers(usersRes);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto my-24 bg-silver-slate">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="text-center"
      >
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => {
            const user = findItemByKey(users, "_id", testimonial.user_id);
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center px-12 py-24">
                  <Quote className="text-brand-200 w-6 h-6" />
                  <p className="text-lg text-brand-200 max-w-4xl italic my-12">
                    {testimonial.feedback || "No feedback provided."}
                  </p>
                  <p className="text-sm text-brand-200 mt-2">
                    {user
                      ? `${user.first_name} ${user.last_name}`
                      : "Anonymous"}
                  </p>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <div className="bg-silver-slate px-12 py-24 flex flex-col items-center">
              <p className="text-lg text-brand-200">No testimonials found.</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
