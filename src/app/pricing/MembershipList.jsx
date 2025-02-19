import MembershipCard from "./MembershipCard";

const membershipPlans = [
  {
    price: 49,
    title: "Basic",
    features: [
      { label: "Minimum contract duration:", value: "24 months", dataPrice: "duration" },
      { label: "Extension:", value: "Unlimited after 24 months", dataPrice: "extension" },
      { label: "Notice period:", value: "30 days", dataPrice: "notice" },
    ],
  },
  {
    price: 99,
    title: "Premium",
    features: [
      { label: "Minimum contract duration:", value: "24 months", dataPrice: "duration" },
      { label: "Extension:", value: "Unlimited after 24 months", dataPrice: "extension" },
      { label: "Notice period:", value: "30 days", dataPrice: "notice" },
    ],
  },
  {
    price: 120,
    title: "Gold",
    features: [
      { label: "Minimum contract duration:", value: "24 months", dataPrice: "duration" },
      { label: "Extension:", value: "Unlimited after 24 months", dataPrice: "extension" },
      { label: "Notice period:", value: "30 days", dataPrice: "notice" },
    ],
  },
];

export default function MembershipList() {
  return (
    <section className="container py-20 md:py-28 mx-auto w-[85%] flex flex-col items-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">Memberships</h2>
        <p className="text-base">
          At Olympic Fit, we offer flexible and tailored membership plans
          designed to fit every fitness level and lifestyle. We have a membership that suits your needs.
        </p>
        <p className="text-base mt-4">
          We prioritize convenience and flexibility, offering easy online
          sign-ups, and cancellation policies
          designed with our members in mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 w-full mt-20">
        {membershipPlans.map((plan, index) => (
          <MembershipCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
