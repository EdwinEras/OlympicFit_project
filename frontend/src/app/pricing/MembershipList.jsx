"use client";

import React, { useState, useEffect } from "react";
import MembershipCard from "./MembershipCard";
import { X } from "lucide-react";
import { getMemPlans } from "../../routes/memplans";

export default function MembershipList() {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await getMemPlans();
        setMembershipPlans(response);
      } catch (error) {
        console.error("Error fetching membership plans:", error);
      }
    };

    fetchMembershipPlans();
  }, []);

  const handleSubscribe = () => {
    console.log("User subscribed with email:", email);
    setIsModalOpen(false);
  };

  return (
    <section className="container py-20 md:py-28 mx-auto w-[85%] flex flex-col items-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">Memberships</h2>
        <p className="text-base">
          At Olympic Fit, we offer flexible and tailored membership plans
          designed to fit every fitness level and lifestyle. We have a
          membership that suits your needs.
          <br />
          <br />
          We prioritize convenience and flexibility, offering easy online
          sign-ups, and cancellation policies designed with our members in mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 w-full mt-20">
        {membershipPlans.map((plan) => (
          <MembershipCard
            key={plan._id}
            {...plan}
            openModal={() => setIsModalOpen(true)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black px-10 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={20} />
            </button>

            <p className="text-gray-600 text-center py-2">
              Enter your email to subscribe to our membership plans.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 my-2 outline-none border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="w-full mt-4 bg-red/90 text-white px-4 py-2 rounded hover:bg-red"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
