import { X } from "lucide-react";
import { useState } from "react";

const ReviewClass = ({ setShow, revClass }) => {
    const [dropdown, setDropdown] = useState(false);
    const [difficulty, setDifficulty] = useState();
    
    return (
        <div className='fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
        <div 
            className='p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8'>
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-semibold">
                    {revClass.name}
                </h2>
                <button 
                onClick={() => {setShow("")}}
                className="bg-pink-500 px-2 py-1 rounded hover:bg-pink-600">
                    <X />
                </button>
            </div>
            <form className="flex flex-col my-4" action="#">
                <p>
                    {revClass.description}
                </p>
                <label>Comment: </label>
                <textarea 
                className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
                type="text" name="comment_class" id="description_class" placeholder="Comment" required />
                <button 
                    onClick={() => {}}
                    className="bg-blue-600 px-4 py-2 mt-2 rounded text-white hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
        </div>
    )
}

export default ReviewClass