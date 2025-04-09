import axios from "axios";
const route = "https://olympic-fit-project-g7l5.vercel.app"

async function getClasses(){
    try{
        const classes = await axios.get(route+"/classes");
        return classes.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createClass(formdata){
    try{
        const classes = await axios.post(route+"/classes", formdata);
        return classes.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getClassById(id){
    try{
        const classes = await axios.get(route+"/classes/"+id);
        return classes.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateClassById(id, formdata){
    try{
        const classes = await axios.put(route+"/classes/"+id, formdata);
        return classes.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteClassById(id){
    try{
        const classes = await axios.delete(route+"/classes/"+id);
        return classes.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getClasses, createClass, getClassById, updateClassById, deleteClassById}