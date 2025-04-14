import { X } from "lucide-react";
import { useState } from "react";
import { createUser } from "../../routes/users";

const CardCreateTrainner = ({ setShow }) => {
  const startTime = new Date().toISOString().slice(0, 16);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [media, setMedia] = useState("");

  const [yearsExperience, setYearsExperience] = useState(1);
  const [specialization, setSpecialization] = useState();
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState();
  const [assignedClasses, setAssignedClasses] = useState([]);
  const [hourlyRate, setHourlyRate] = useState(8);
  const [monthlySalary, setMonthlySalary] = useState(2000);

  async function handleSubmit(){
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      password_hash: password,
      gender: gender,
      address: address,
      membership: null,
      dob: dob,
      media: media,
      employee: {
        years_experience: yearsExperience,
        specialization: specialization,
        type: "full-time",
        employment_status: status,
        description: description,
        assigned_classes: assignedClasses,
        hourly_rate: hourlyRate,
        monthly_salary: monthlySalary,
        role: "trainer",
        _id: editTrainer._id
      }
    }
    console.log("formData: "+formData);
    const user = await createUser(formData);
    console.log(user);
    setShow("");
  }

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 max-h-[600px] sm:max-h-full overflow-y-auto bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">New Trainer</h2>
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
            value={firstName} onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName} onChange={(e) => setLastName(e.target.value)}
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
            value={email} onChange={(e) => setEmail(e.target.value)}
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
            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={monthlySalary} onChange={(e) => setMonthlySalary(Number(e.target.value))}
              placeholder="1000.00"
              required
            />
            <label className="mr-4">Hourly rate: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="number"
              name="hourly_rate"
              value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))}
              placeholder="8.5"
              required
            />
          </div>
          <div>
            <label className="mr-4">Password: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 mr-4 text-midnights outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="password"
              name="passowrd_hash"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              required
            />
          </div>
          <div className="flex items-center text-midnights">
            <label htmlFor="gender" className="mr-4">
              Select Gender:
            </label>
            <select
              name="gender"
              value={gender} onChange={(e) => setGender(e.target.value)}
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
              value="active" onChange={(e) => setStatus(e.target.value)}
              checked={status === "active"} 
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="inactive" onChange={(e) => setStatus(e.target.value)}
              checked={status === "inactive"} 
            />
            <label>No</label>
          </div>
          <div>
            <label className="mr-4">Date of Birth: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="date"
              min="1920-01-01T00:00"
              max="2015-01-01T00:00"
              name="dob"
              value={dob} onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Location: </label>
          <input
            className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="address"
            value={address} onChange={(e) => setAddress(e.target.value)}
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
            value={media} onChange={(e) => setMedia(e.target.value)}
            placeholder="URL Image"
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Description: </label>
          <textarea
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="description"
            value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder="Write the description here"
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Assigned Classes: </label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="assigned_classes"
            value={assignedClasses.join(", ")} 
            onChange={(e) => setAssignedClasses(e.target.value.split(",").map(str => str.trim()))}
            placeholder="class1, class2, ..."
            required
          />
          </div>
          <div>
            <label className="mr-4">Years Experience: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="exprience"
              value={yearsExperience} onChange={(e) => setYearsExperience(Number(e.target.value))}
              placeholder="3"
              required
            />
            <label className="m-4">Especialization: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="especialization"
              value={specialization} onChange={(e) => setSpecialization(e.target.value)}
              placeholder="Kickboxing"
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
