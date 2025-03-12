import { Dumbbell, Flame, Users } from "lucide-react";
 
const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center px-6 lg:px-16">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-10">
          Why Choose Our Gym?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-silver-slate to-midnights rounded-2xl shadow-lg hover:shadow-2xl transition">
            <Dumbbell className="w-12 h-12 text-brand-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2 uppercase text-brand-200">
              Strength Training
            </h3>
            <p className="text-brand-200">
              Build muscle and improve endurance with our advanced weight
              training equipment.
            </p>
          </div>
 
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-silver-slate to-midnights rounded-2xl shadow-lg hover:shadow-2xl transition">
            <Flame className="w-12 h-12 text-brand-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2 uppercase text-brand-200">
              Cardio Workouts
            </h3>
            <p className="text-brand-200">
              Burn calories and boost heart health with our high-intensity
              cardio sessions.
            </p>
          </div>
 
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-silver-slate to-midnights rounded-2xl shadow-lg hover:shadow-2xl transition">
            <Users className="w-12 h-12 text-brand-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2 uppercase text-brand-200">
              Group Fitness Classes
            </h3>
            <p className="text-brand-200">
              Stay motivated and have fun with our instructor-led group workouts
              for all levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default WhyChooseUs;