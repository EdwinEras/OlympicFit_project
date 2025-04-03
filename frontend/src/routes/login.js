import axios from "axios";
const route = "http://localhost:3001"

async function loginUser(formData){
    try{
        const data = await axios.post(route+"/login", formData);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {loginUser}