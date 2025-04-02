import { X } from "lucide-react";
import { useState } from "react";
import { updateUserById } from "../../routes/users";

const CardCreateTrainner = ({ setShow, editTrainer }) => {
  const [gender, setGender] = useState();
  const [formData, setFormData] = useState({
    first_name: editTrainer.first_name,
    last_name: editTrainer.last_name,
    email: editTrainer.email,
    phone_number: editTrainer.phone_number,
    gender: editTrainer.gender,
    address: editTrainer.address,
    membership: null,
    promotions: [],
    dob: editTrainer.dob,
    media: editTrainer.media,
    employee: {
      years_experience: 6,
      specialization: "Cycling Instructor",
      type: "full-time",
      employment_status: "active",
      description: "Teddy helps clients enhance endurance and cardiovascular health through cycling.",
      hourly_rate: 50,
      monthly_salary: 4000,
      role: "trainer",
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") setGender(value);
    if(name==="hourly_rate"){
      setFormData((prevData) => ({
        ...prevData,
        employee: {
          ...prevData.employee,
          [name]: Number(value),
        },
      }));
    }
    if(name==="monthly_salary"){
      setFormData((prevData) => ({
        ...prevData,
        employee: {
          ...prevData.employee,
          [name]: Number(value),
        },
      }));
    }else{
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  async function handleSubmit(){
    console.log("formData: "+formData);
    const user = await updateUserById(editTrainer._id, formData);
    console.log(user);
    setShow("");
  }

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 max-h-[600px] sm:max-h-full overflow-y-auto bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">Edit Trainer</h2>
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
            value={formData.first_name} onChange={handleChange}
            placeholder="First name"
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Last name: </label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="last_name"
            value={formData.last_name} onChange={handleChange}
            placeholder="Last name"
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Email: </label>
          <input
            className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
            type="email"
            name="email"
            value={formData.email} onChange={handleChange}
            placeholder="email@hotmail.com"
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Phone number: </label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="tel"
            name="phone_number"
            value={formData.phone_number} onChange={handleChange}
            placeholder="123 456 7890"
            required
          />
          </div>
          <div>
            <label className="mr-4">Salary: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 mr-4 text-midnights outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              name="monthly_salary"
              value={formData.monthly_salary} onChange={handleChange}
              placeholder="1000.00"
              required
            />
            <label className="mr-4">Hourly rate: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="number"
              name="hourly_rate"
              value={formData.hourly_rate} onChange={handleChange}
              placeholder="8.5"
              required
            />
          </div>
          <div className="flex items-center text-midnights">
            <label htmlFor="gender" className="mr-4">
              Select Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="rounded bg-gray-300 p-2 text-midnights"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mr-4">Set active: </label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              onChange={handleChange}
              value="active"
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              onChange={handleChange}
              value="inactive"
            />
            <label>No</label>
          </div>
          <div>
            <label className="mr-4">Date of Birth: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="datetime-local"
              min="1920-01-01T00:00"
              max="2015-01-01T00:00"
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
            value={formData.address} onChange={handleChange}
            placeholder="123 address Ave"
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Image URL: </label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="url"
            name="media"
            value={formData.media} onChange={handleChange}
            placeholder="URL Image"
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

export default CardCreateTrainner;
