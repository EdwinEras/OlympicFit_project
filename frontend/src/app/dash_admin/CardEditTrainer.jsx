import { X } from "lucide-react";
import { useState } from "react";

const CardCreateTrainner = ({ setShow, editTrainer }) => {
  const [dropdown, setDropdown] = useState(false);
  const [gender, setGender] = useState();
  

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 max-h-[600px] sm:max-h-full overflow-y-auto bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">Edit trainer</h2>
          <button
            onClick={() => {
              setShow("");
            }}
            className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
          >
            <X />
          </button>
        </div>
        <form className="flex flex-col" action="#">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">First name: </label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="first_name"
              placeholder="First name"
              defaultValue={editTrainer.first_name}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Last name: </label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="Last_name"
              placeholder="Last name"
              defaultValue={editTrainer.last_name}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Email: </label>
            <input
              className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
              type="email"
              name="email"
              placeholder="email@hotmail.com"
              defaultValue={editTrainer.email}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Phone number: </label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="tel"
              name="phone"
              placeholder="123 456 7890"
              defaultValue={editTrainer.phone}
              required
            />
          </div>
          <div>
            <label className="mr-4">Salary: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 mr-4 text-midnights outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              name="salary"
              placeholder="1000.00"
              defaultValue={editTrainer.salary}
              required
            />
            <label className="mr-4">Hourly rate: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="number"
              name="hour_rate"
              placeholder="8:00"
              defaultValue={editTrainer.hour_rate}
              required
            />
          </div>
          <div className="flex items-center text-midnights">
            <label htmlFor="gender" className="mr-4">
              Select Gender:
            </label>
            <select
              id="gender"
              value={editTrainer.gender}
              onChange={(e) => setGender(e.target.value)}
              className="rounded bg-gray-300 p-2 text-midnights"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="mr-4">Set active: </label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="yes"
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="no"
            />
            <label>No</label>
          </div>
          <div>
            <label className="mr-4">Date of Birth: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="date"
              min="1920-01-01"
              max="2015-01-01"
              name="dob"
              defaultValue={editTrainer.dob}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Location: </label>
            <input
              className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="address"
              placeholder="123 address Ave"
              defaultValue={editTrainer.address}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Image URL: </label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="url"
              name="media"
              placeholder="URL Image"
              defaultValue={editTrainer.media}
              required
            />
          </div>
          <button
            onClick={() => {}}
            className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white bg-ocean-blue/70"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardCreateTrainner;
