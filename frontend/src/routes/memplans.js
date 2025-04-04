import axios from "axios";
const route = "http://localhost:3001"

async function getMemPlans(){
    try{
        const memplan = await axios.get(route+"/memplans");
        return memplan.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createMemPlan(formdata){
    try{
        const memplan = await axios.post(route+"/memplans", formdata);
        return memplan.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getMemPlanById(id){
    try{
        const memplan = await axios.get(route+"/memplans/"+id);
        return memplan.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateMemPlanById(id, formdata){
    try{
        const memplan = await axios.put(route+"/memplans/"+id, formdata);
        return memplan.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteMemPlanById(id){
    try{
        const memplan = await axios.delete(route+"/memplans/"+id);
        return memplan.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getMemPlans, createMemPlan, getMemPlanById, updateMemPlanById, deleteMemPlanById}