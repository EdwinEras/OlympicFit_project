"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
 
const testimonials = [
  {
    text: "I took more than one class, and I loved each one of them! The lessons were well-structured, easy to follow, and provided real-world examples that made learning enjoyable. The instructors were patient and always willing to help with any questions. I feel much more confident in my skills now!",
    name: "John Doe",
  },
  {
    text: "The instructors were amazing, and the content was very engaging! Each lesson was designed to build on the previous one, making it easy to progress without feeling overwhelmed. I especially appreciated the hands-on exercises, which helped reinforce what I was learning. It was truly a fantastic learning experience!",
    name: "Jane Smith",
  },
  {
    text: "A fantastic experience! I highly recommend these classes to anyone looking to learn and grow. The material was thorough, the lessons were interactive, and I loved the real-world applications of what we were taught. The support from the instructors and community was incredible, making the whole experience even better.",
    name: "Michael Brown",
  },
];
 
const TestimonialCarousel = () => {
  return (
    <div className="w-full mx-auto my-24">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="text-center"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-silver-slate px-12 py-24 flex flex-col items-center">
            <Quote className="text-brand-200 w-6 h-6 mb-12" />
              <p className="text-lg text-brand-200 max-w-4xl">{testimonial.text}</p>
              <p className="font-bold text-md text-brand-200 mt-8">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
 
export default TestimonialCarousel;