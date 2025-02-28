import { ArrowUp, ArrowDown, X } from "lucide-react";
import { useState } from "react";

const CardCreateTrainner = ({setShow, editTrainer}) => {
    const [dropdown, setDropdown] = useState(false);
    const [gender, setGender] = useState();

    return (
        <div className='fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
        <div 
            className='p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8'>
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-semibold">Edit Trainner</h2>
                <button 
                onClick={() => {setShow("")}}
                className="bg-pink-500 px-2 py-1 rounded hover:bg-pink-600">
                    <X />
                </button>
            </div>
            <form className="flex flex-col" action="#">
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="text" name="first_name" placeholder="First name" defaultValue={editTrainer.first_name} required />
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="text" name="Last_name" placeholder="Last name" defaultValue={editTrainer.last_name} required />
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="email" name="email" placeholder="email@hotmail.com" defaultValue={editTrainer.email} required />
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="tel" name="phone" placeholder="123 456 7890" defaultValue={editTrainer.phone} required />
                <div>
                    <label>Salary: </label>
                    <input 
                    className="bg-gray-300 rounded p-1 my-2 mr-4 hover:bg-gray-400"
                    type="number" name="salary" placeholder="1000.00" defaultValue={editTrainer.salary} required />
                    <label>Hourly rate: </label>
                    <input 
                    className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                    type="number" name="hour_rate" placeholder="8:00" defaultValue={editTrainer.hour_rate} required />
                </div>
                <div className="flex">
                    <label>Select Gender: </label>
                    <div className="text-gray-400">
                        <button 
                            onClick={()=>{setDropdown(!dropdown)}}
                            className="flex rounded bg-gray-300 rounded p-1 mx-2 hover:bg-gray-400 hover:text-white"
                        >{editTrainer.gender} {dropdown ? <ArrowUp /> : <ArrowDown />}
                        </button>
                        {dropdown &&
                            <div className="flex flex-col">
                                <button 
                                onClick={()=>{setGender("male")}}
                                className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white">
                                    Male</button>
                                <button
                                onClick={()=>{setGender("female")}}
                                className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white">
                                    Female</button>
                                <button
                                onClick={()=>{setGender("other")}}
                                className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white">
                                    Other</button>
                            </div>
                        }
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
                    className="bg-gray-300 text-gray-400 rounded p-1 my-2 hover:bg-gray-400"
                    type="date" min="1920-01-01" max="2015-01-01" name="dob" defaultValue={editTrainer.dob} required />
                </div>
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="text" name="address" placeholder="123 address Ave" defaultValue={editTrainer.address} required />
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="url" name="media" placeholder="URL Image" defaultValue={editTrainer.media} required />
                <button 
                    onClick={() => {}}
                    className="bg-blue-600 px-4 py-2 mt-2 rounded text-white hover:bg-blue-700">
                    Save
                </button>
            </form>
        </div>
        </div>
    )
}

export default CardCreateTrainner