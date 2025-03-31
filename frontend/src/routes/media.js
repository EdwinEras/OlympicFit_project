import { axios } from "axios";
const route = "http://localhost/3001"

async function getMedias(){
    try{
        const data = await axios.get(route+"/media");
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createMedia(formdata){
    try{
        const data = await axios.post(route+"/media", formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getMediaById(id){
    try{
        const data = await axios.get(route+"/media/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateMediaById(id, formdata){
    try{
        const data = await axios.put(route+"/media/"+id, formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteMediaById(id){
    try{
        const data = await axios.delete(route+"/media/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

module.exports = {getMedias, createMedia, getMediaById, updateMediaById, deleteMediaById}