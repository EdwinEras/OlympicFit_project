import { ArrowUp, ArrowDown, X } from "lucide-react";
import { useState } from "react";

const CardEditClass = ({setShow, editClass}) => {
    const [dropdown, setDropdown] = useState(false);
    const [difficulty, setDifficulty] = useState();

    
    return (
        <div className='fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
        <div 
            className='p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8'>
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-semibold">Edit class</h2>
                <button 
                onClick={() => {setShow("")}}
                className="bg-pink-500 px-2 py-1 rounded hover:bg-pink-600"
                >
                    <X />
                </button>
            </div>
            <form className="flex flex-col" action="#">
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="name" name="name_class" id="name_class" placeholder="name" 
                defaultValue={editClass.name} required />
                <div >
                    <input 
                    className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                    type="text" name="category_class" id="category_class" placeholder="category" 
                    defaultValue={editClass.category} required />
                    <label className="ml-8">Capacity: </label>
                    <input 
                    className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                    type="number" min={0} max={15} name="capacity_class" id="capacity_class" placeholder="#" 
                    defaultValue={editClass.capacity}required />
                </div>
                <div className="flex text-gray-400 ">
                    <label>Select Difficulty: </label>
                    <div>
                        <button 
                            onClick={()=>{setDropdown(!dropdown)}}
                            className="flex rounded bg-gray-300 rounded p-1 mx-2 hover:bg-gray-400 hover:text-white"
                        >{editClass.difficulty} {dropdown ? <ArrowUp /> : <ArrowDown />}
                        </button>
                        {dropdown &&
                            <div className="flex flex-col">
                                <button 
                                onClick={()=>{setDifficulty("regular")}}
                                className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white">
                                    Regular</button>
                                <button
                                onClick={()=>{setDifficulty("intermedia")}}
                                className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white">
                                    Intermedia</button>
                                <button
                                onClick={()=>{setDifficulty("advance")}}
                                className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white">
                                    Advance</button>
                            </div>
                        }
                    </div>
                </div>
                <textarea 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="text" name="description_class" id="description_class" placeholder="description" 
                defaultValue={editClass.description} required />
                <div>
                    <label>Set active: </label>
                    <input 
                    className="bg-gray-300 rounded p-1 m-2"
                    type="radio" name="active" id="active_yes" defaultValue="yes" />
                    <label>Yes</label>
                    <input 
                    className="bg-gray-300 rounded p-1 m-2"
                    type="radio" name="active" id="active_no" defaultValue="no"/>
                    <label>No</label>
                </div>
                <div>
                    <label>Start date: </label>
                    <input 
                    className="bg-gray-300 text-gray-400 rounded p-1 my-2 mr-8 hover:bg-gray-400"
                    type="datetime-local" min="2025-01-01T00:00" max="2029-12-31T00:00" name="start_time" id="start_time" placeholder="start time" 
                    defaultValue={editClass.start_time} required />
                    <label>End date: </label>
                    <input 
                    className="bg-gray-300 text-gray-400 rounded p-1 my-2 hover:bg-gray-400"
                    type="datetime-local" min="2025-01-01T00:00" max="2029-12-31T00:00" name="end_time_class" id="end_time" placeholder="end_time" 
                    defaultValue={editClass.end_time} required />
                </div>
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="location" name="location_class" id="location_class" placeholder="location" 
                defaultValue={editClass.location} required />
                <input 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="text" name="media_class" id="media_class" placeholder="URL Image" 
                defaultValue={editClass.media} required />
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

export default CardEditClass