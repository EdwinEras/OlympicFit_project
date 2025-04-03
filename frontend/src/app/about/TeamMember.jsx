export default function TeamMember({
  first_name,
  last_name,
  employee,
  media,
}) {
  return (
    <div className="card w-full h-[560px] perspective">
      <div className="card__content relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 hover:rotate-y-180">
        <div className="card__front absolute w-full h-full top-0 bottom-0 left-0 right-0 rounded-2xl text-left transform-style-preserve-3d">
          <div className="relative w-full h-full">
            <img
              src={`${media}`}
              alt={`${first_name} ${last_name}`}
              className="w-full h-full object-cover rounded-2xl mb-4 opacity-90"
            />
            <h2 className="absolute uppercase bottom-8 pl-4 text-2xl font-bold text-left text-white">
              {first_name} {last_name}
            </h2>
          </div>
        </div>

        <div className="card__back absolute top-0 bottom-0 left-0 text-white bg-[#2c2b2a] p-4 right-0 rounded-2xl transform-style-preserve-3d rotate-y-180">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <img
              src={`${media}`}
              alt={`${first_name} ${last_name}`}
              className="w-full h-full object-cover mb-4 rounded-2xl"
            />
            <h2 className="text-2xl font-bold uppercase">
              {first_name} {last_name}
            </h2>
            <h3 className="text-md my-2 text-[#ffffffc2]">
              {employee?.specialization}
            </h3>
            <p className="text-md text-[#ffffffc2]">
              {employee?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
