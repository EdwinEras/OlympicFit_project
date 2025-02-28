import TeamMember from "./TeamMember";

const teamMemberData = [
  {
    name: "Edwin A",
    role: "Head Coach",
    description: "Expert in strength training and nutrition.",
    image: "Edwin.jpg",
  },
  {
    name: "Pari S",
    role: "Yoga Instructor",
    description: "Specialist in flexibility and mindfulness.",
    image: "pari.jpg",
  },
  {
    name: "Kozeta A",
    role: "Personal Trainer",
    description: "Certified personal trainer with 10 years of experience.",
    image: "Kozeta.jpg",
  },
  {
    name: "Nigh G",
    role: "Nutritionist",
    description: "Passionate about healthy eating and meal planning.",
    image: "nigh.avif",
  },
  {
    name: "Teddy A",
    role: "Cardio Specialist",
    description: "Helping clients improve endurance and heart health.",
    image: "Teddy.jpg",
  },
  {
    name: "Augustine B",
    role: "Pilates Instructor",
    description: "Guiding clients to core strength and stability.",
    image: "Aug.jpg",
  }
];

export default function TeamList() {
  return (
    <section className="container py-20 md:py-28 mx-auto w-[85%] flex flex-col items-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">Meet Our Team</h2>
        <p className="text-base">
          At Olympic Fit, we have a team of dedicated professionals ready to guide you on your fitness journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 w-full mt-20">
        {teamMemberData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
