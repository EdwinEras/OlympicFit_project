import axios from "axios";
const route = "http://localhost:3001"

async function loginUser(formData){
    try{
        const user = await axios.post(route+"/login", formData);
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {loginUser}