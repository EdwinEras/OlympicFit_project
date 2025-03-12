import { users } from "../../lib/userData";
import TeamMember from "./TeamMember";

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
          <br />
          Whether you’re just starting your fitness journey or looking to push
          your limits, we are here to guide and motivate you every step of the
          way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-20">
        {users.map((user) => (
          <TeamMember key={user.user_id} {...user} />
        ))}
      </div>
    </section>
  );
}
