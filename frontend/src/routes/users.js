import { axios } from "axios";
const route = "http://localhost/3001"

async function getUsers(){
    try{
        const data = await axios.get(route+"/users");
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createUser(formdata){
    try{
        const data = await axios.post(route+"/users", formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getUserById(id){
    try{
        const data = await axios.get(route+"/users/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateUserById(id, formdata){
    try{
        const data = await axios.put(route+"/users/"+id, formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteUserById(id){
    try{
        const data = await axios.delete(route+"/users/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

module.exports = {getUsers, createUser, getUserById, updateUserById, deleteUserById}