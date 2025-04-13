import { X } from "lucide-react";
import { useState } from "react";
import { updateUserById } from "../../routes/users";

const CardEditMember = ({ setShow, editMember }) => {
  const startTime = new Date().toISOString().slice(0, 16);
  const [firstName, setFirstName] = useState(editMember.first_name);
  const [lastName, setLastName] = useState(editMember.last_name);
  const [email, setEmail] = useState(editMember.email);
  const [phoneNumber, setPhoneNumber] = useState(editMember.phone_number);
  const [gender, setGender] = useState(editMember.gender);
  const [membership, setMembership] = useState("Basic");
  const [status, setStatus] = useState("");
  const [dob, setDob] = useState(editMember.dob);
  const [address, setAddress] = useState(editMember.address);
  const [media, setMedia] = useState(editMember.media);
  const [plan, setPlan] = useState(0);

  const arrPlans = ["67d707208fea0c99f890318a", "67ec8a5235c821e5003747b4", "67ec8a5235c821e5003747b3"]

  async function handleSubmit(){
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: firstName,
      phone_number: phoneNumber,
      gender: gender,
      address: address,
      membership: {
        end_date: "2026-01-01",
        start_date: startTime,
        plan_code: arrPlans[plan],
        status: true,
      },
      dob: dob,
      media: media,
      employee: null
    };
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
                    className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none outline-none"
                    type="text" name="first_name" placeholder="First name" 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    required />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="mr-4">Last name: </label>    
                    <input 
                    className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none outline-none"
                    type="text" name="last_name" placeholder="Last name" 
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                    required />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="mr-4">Email: </label>
                    <input 
                    className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none outline-none"
                    type="email" name="email" placeholder="email@hotmail.com" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="mr-4">Phone: </label>
                    <input 
                    className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none outline-none"
                    type="tel" name="phone_number" placeholder="123 456 7890" 
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                    required />
                </div>
                    <div className="flex flex-col sm:flex-row text-midnights gap-4 my-2">
                    <div className="flex items-center">
                        <label htmlFor="gender" className="mr-2">
                        Select Gender:
                        </label>
                        <select
                        className="rounded bg-gray-300 p-2 text-midnights outline-none"
                        name="gender"
                        value={gender} onChange={(e) => setGender(e.target.value)}
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
                        value={membership} onChange={(e) => {
                            const member = e.target.value;
                            if(member === "Basic"){
                                setPlan(0);
                            }else if(member === "Gold"){
                                setPlan(1);
                            }else if(member === "Premium"){
                                setPlan(2);
                            }
                            setMembership(member)
                        }}
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
                        className="bg-gray-300 rounded p-1 m-2"
                        type="radio" 
                        name="employment_status" 
                        value="yes" 
                        checked={status === true} onChange={(e) => setStatus(true)}
                        />
                        <label>Yes</label>
                        <input 
                        className="bg-gray-300 rounded p-1 m-2"
                        type="radio" 
                        name="employment_status" 
                        value="no" 
                        checked={status === false} onChange={(e) => setStatus(false)}
                        />
                        <label>No</label>
                    </div>
                    <div>
                        <label>Date of Birth: </label>
                        <input 
                        className="bg-gray-300 text-midnights rounded p-2 my-2 outline-none"
                        type="date" 
                        min="1920-01-01T00:00" 
                        max="2015-01-01T00:00" 
                        name="dob" 
                        value={dob} onChange={(e) => setDob(e.target.value)}
                        required />
                    </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="mr-4">Location: </label>
                    <input 
                    className="bg-gray-300 text-midnights w-full rounded p-2 my-2 outline-none"
                    type="text" name="address" placeholder="123 address Ave" 
                    value={address} onChange={(e) => setAddress(e.target.value)}
                    required />
                    </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="mr-4">URL Image: </label>
                    <input 
                    className="bg-gray-300 text-midnights w-[85%] rounded p-2 my-2 outline-none"
                    type="url" 
                    name="media" 
                    placeholder="URL image"
                    value={media} onChange={(e) => setMedia(e.target.value)}
                    required />
                </div>
                <button 
                    type="submit"
                    formAction={handleSubmit}
                    className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white bg-ocean-blue/70">
                    Save
                </button>
            </form>
      </div>
    </div>
  );
};

export default CardEditMember;
