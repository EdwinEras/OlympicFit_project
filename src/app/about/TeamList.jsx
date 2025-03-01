import TeamMember from "./TeamMember";

const teamMemberData = [
  {
    name: "Edwin A",
    role: "Head Coach",
    description:
      "An expert in strength training and nutrition, Edwin has over 15 years of experience in designing personalized fitness programs.",
    image: "Edwin.jpg",
  },
  {
    name: "Pari S",
    role: "Yoga Instructor",
    description:
      "With a deep passion for flexibility and mindfulness, Pari has been teaching yoga for over 8 years.",
    image: "pari.jpg",
  },
  {
    name: "Kozeta A",
    role: "Personal Trainer",
    description:
      "Certified personal trainer with 10 years of experience, Kozeta specializes in creating customized workout routines that help clients reach their fitness goals.",
    image: "Kozeta.jpg",
  },
  {
    name: "Nigh G",
    role: "Nutritionist",
    description:
      "Passionate about healthy eating and meal planning, Nigh uses evidence-based strategies to help clients develop sustainable eating habits.",
    image: "nigh.avif",
  },
  {
    name: "Teddy A",
    role: "Cardio Specialist",
    description:
      "Teddy helps clients improve their endurance and heart health through tailored cardiovascular training programs.",
    image: "Teddy.jpg",
  },
  {
    name: "Augustine B",
    role: "Pilates Instructor",
    description:
      "Augustine is a Pilates instructor with a focus on core strength and stability. With years of experience in both mat and reformer Pilates, he helps clients improve their posture and balance",
    image: "Aug.jpg",
  },
];

export default function TeamList() {
  return (
    <section className="container py-20 md:py-28 mx-auto w-[85%] flex flex-col items-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">
          Meet Our Team
        </h2>
        <p className="text-base">
          At Olympic Fit, we have a team of dedicated professionals ready to
          guide you on your fitness journey.
          <br />
          <br /> Whether you’re just starting your fitness journey or looking to
          push your limits, we are here to guide and motivate you every step of
          the way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-20">
        {teamMemberData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
