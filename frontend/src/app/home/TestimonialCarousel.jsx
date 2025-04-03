"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { getReviews } from "../../routes/reviews"; // ✅ adjust path if needed

import "swiper/css";
import "swiper/css/pagination";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await getReviews();
        if (res?.data) {
          setTestimonials(res.data);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="w-full mx-auto my-24">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="text-center"
      >
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-silver-slate px-12 py-24 flex flex-col items-center">
                <Quote className="text-brand-200 w-6 h-6 mb-12" />
                <p className="text-lg text-brand-200 max-w-4xl italic">
                  {testimonial.feedback || "No feedback provided."}
                </p>

                <p className="font-bold text-md text-brand-200 mt-4">
                  Rating: {testimonial.rating ?? "N/A"} ⭐
                </p>

                <p className="text-sm text-brand-200 mt-2">
                  {testimonial.user_id ? `User ID: ${testimonial.user_id}` : "Anonymous"}
                </p>

                {testimonial.created_at && (
                  <p className="text-sm text-brand-200">
                    {new Date(testimonial.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))
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
