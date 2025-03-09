import { ArrowUp, ArrowDown, X } from "lucide-react";
import { useState } from "react";

const CardCreateMember = ({setShow}) => {
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [gender, setGender] = useState("Gender");
    const [mem, setMem] = useState("Membership");

    return (
        <div className='fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
        <div 
            className='p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8'>
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-semibold">New member</h2>
                <button 
                onClick={() => {setShow("")}}
                className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red">
                    <X />
                </button>
            </div>
            <form className="flex flex-col" action="#">
                <input 
                className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none outline-none"
                type="text" name="first_name" placeholder="First name" required />
                <input 
                className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none outline-none"
                type="text" name="first_name" placeholder="Last name" required />
                <input 
                className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none outline-none"
                type="email" name="email" placeholder="email@hotmail.com" required />
                <input 
                className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none outline-none"
                type="tel" name="phone" placeholder="123 456 7890" required />
                <div>
                    <label>Password: </label>
                    <input 
                    className="bg-gray-300 rounded p-2 my-2 mr-4 text-midnights"
                    type="password" name="passowrd_1" placeholder="**********" required />
                    <label>Confirm password: </label>
                    <input 
                    className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
                    type="password" name="passowrd_2" placeholder="**********" required />
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
                    className="bg-gray-300 rounded p-1 m-2"
                    type="radio" name="employment_status" value="yes" />
                    <label>Yes</label>
                    <input 
                    className="bg-gray-300 rounded p-1 m-2"
                    type="radio" name="employment_status" value="no"/>
                    <label>No</label>
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input 
                    className="bg-gray-300 text-midnights rounded p-2 my-2 outline-none"
                    type="date" min="1920-01-01T00:00" max="2015-01-01T00:00" name="dob" required />
                </div>
                <input 
                className="bg-gray-300 text-midnights rounded p-2 my-2 outline-none"
                type="text" name="address" placeholder="123 address Ave" required />
                <input 
                className="bg-gray-300 text-midnights rounded p-2 my-2 outline-none"
                type="url" name="media" placeholder="URL Image" required />
                <button 
                    onClick={() => {}}
                    className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white bg-ocean-blue/70">
                    Save
                </button>
            </form>
        </div>
        </div>
    )
}

export default CardCreateMember;