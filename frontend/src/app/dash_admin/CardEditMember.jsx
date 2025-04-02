import { X } from "lucide-react";
import { useState } from "react";
import { updateUserById } from "../../routes/users";

const CardEditMember = ({ setShow, editMember }) => {
  const [gender, setGender] = useState(editMember.gender);
  const [mem, setMem] = useState(editMember.membership);
  const [formData, setFormData] = useState({
    first_name: editMember.first_name,
    last_name: editMember.last_name,
    email: editMember.email,
    phone_number: editMember.phone_number,
    gender: editMember.gender,
    address: editMember.address,
    membership: {
      end_date: "",
      start_date: "",
      plan_code: "67d707208fea0c99f890318a",
      status: true,
    },
    promotions: [],
    dob: "",
    media: editMember.media,
    employee: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("membership.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        membership: { ...prev.membership, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  async function handleSubmit(){
    console.log("formData: "+formData);
    const user = await updateUserById(editMember._id, formData);
    console.log(user);
    setShow("");
  }

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 max-h-[600px] sm:max-h-full overflow-y-auto bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">New member</h2>
          <button
            onClick={() => {
              setShow("");
            }}
            className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
          >
            <X />
          </button>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">First name: </label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="first_name"
              placeholder="First name"
              value={formData.first_name} onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Last name: </label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="last_name"
              placeholder="Last name"
              value={formData.last_name} onChange={handleChange}
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
              value={formData.email} onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Phone: </label>
            <input
              className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
              type="tel"
              name="phone_number"
              placeholder="123 456 7890"
              value={formData.phone_number} onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row text-midnights gap-4 my-2">
            <div className="flex items-center">
              <label htmlFor="gender" className="mr-2">
                Select Gender:
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="rounded bg-gray-300 p-2 text-midnights outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-center">
              <label htmlFor="membership" className="mr-2">
                Select Membership:
              </label>
              <select
                id="membership"
                value={mem}
                onChange={(e) => setMem(e.target.value)}
                className="rounded bg-gray-300 p-2 text-midnights outline-none"
              >
                <option value="Basic">Basic</option>
                <option value="Gold">Gold</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>
          <div>
            <label>Set active: </label>
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
            <label>Date of Birth: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="date"
              min="1920-01-01"
              max="2015-01-01"
              name="dob"
              value={formData.dob} onChange={handleChange}
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
              value={formData.address} onChange={handleChange}
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
              value={formData.media} onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            formAction={handleSubmit}
            className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white bg-ocean-blue/70"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardEditMember;
