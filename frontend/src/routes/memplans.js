import axios from "axios";
const route = "http://localhost:3001"

async function getMemPlans(){
    try{
        const data = await axios.get(route+"/memplans");
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createMemPlan(formdata){
    try{
        const data = await axios.post(route+"/memplans", formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getMemPlanById(id){
    try{
        const data = await axios.get(route+"/memplans/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateMemPlanById(id, formdata){
    try{
        const data = await axios.put(route+"/memplans/"+id, formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteMemPlanById(id){
    try{
        const data = await axios.delete(route+"/memplans/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getMemPlans, createMemPlan, getMemPlanById, updateMemPlanById, deleteMemPlanById}