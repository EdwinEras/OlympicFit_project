import axios from "axios";
const route = "http://localhost:3001"

async function getClasses(){
    try{
        const data = await axios.get(route+"/classes");
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createClass(formdata){
    try{
        const data = await axios.post(route+"/classes", formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getClassById(id){
    try{
        const data = await axios.get(route+"/classes/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateClassById(id, formdata){
    try{
        const data = await axios.put(route+"/classes/"+id, formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteClassById(id){
    try{
        const data = await axios.delete(route+"/classes/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getClasses, createClass, getClassById, updateClassById, deleteClassById}