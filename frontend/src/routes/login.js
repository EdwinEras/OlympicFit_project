import axios from "axios";
const route = "https://olympic-fit-project-g7l5.vercel.app"

async function loginUser(formData){
    try{
        const user = await axios.post(route+"/login", formData);
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {loginUser}