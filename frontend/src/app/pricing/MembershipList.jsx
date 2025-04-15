"use client";

import React, { useState, useEffect } from "react";
import MembershipCard from "./MembershipCard";
import { X } from "lucide-react";
import { getMemPlans } from "../../routes/memplans";
import { useRouter } from "next/navigation";

export default function MembershipList() {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedUser = getFromLocalStorage("user");
    setUser(savedUser);

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

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const handleSubscribe = () => {
    if (user) {
      alert(
        "Congratulations! You subscribed to a new membership. Go to your dashboard to see the subscribe membership."
      );
    } else {
      setIsModalOpen(true);
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
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
            openModal={handleSubscribe}
          />
        ))}
      </div>

      {isModalOpen && !user && (
        <div className="fixed inset-0 bg-black px-10 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={20} />
            </button>

            <p className="text-gray-600 text-center py-2">
              Please log in to subscribe to a membership plan.
            </p>

            <button
              className="w-full mt-4 bg-midnights text-white px-4 py-2 rounded"
              onClick={handleLoginRedirect}
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
