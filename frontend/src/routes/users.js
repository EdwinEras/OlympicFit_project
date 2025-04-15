import axios from "axios";
const route = "https://olympic-fit-project-g7l5.vercel.app"
const route2 = "http://localhost:3001"

async function getUsers(){
    try{
        const user = await axios.get(route+"/users");
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createUser(formdata){
    try{
        const user = await axios.post(route+"/users", formdata, {
            headers: { "Content-Type": "application/json" }
        });
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getUserById(id){
    try{
        const user = await axios.get(route+"/users/"+id);
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateUserById(id, formdata){
    try{
        const user = await axios.put(route2+"/users/"+id, formdata);
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteUserById(id){
    try{
        const user = await axios.delete(route+"/users/"+id);
        return user.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getUsers, createUser, getUserById, updateUserById, deleteUserById}