export default function TeamMember({ name, role, description, image }) {
    return (
      <div className="bg-silver-slate py-8 rounded-2xl text-center text-brand-200 transform transition duration-500 md:hover:scale-110">
        <img src={`/images/${image}`} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4" />
        <h2 className="text-2xl font-semibold">{name}</h2>
        <h3 className="text-lg font-medium text-brand-300">{role}</h3>
        <p className="mt-4 text-sm text-brand-100">{description}</p>
      </div>
    );
  }
  