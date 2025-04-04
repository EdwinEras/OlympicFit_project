import axios from "axios";
const route = "http://localhost:3001"

async function getMedias(){
    try{
        const media = await axios.get(route+"/media");
        return media.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createMedia(formdata){
    try{
        const media = await axios.post(route+"/media", formdata);
        return media.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getMediaById(id){
    try{
        const media = await axios.get(route+"/media/"+id);
        return media.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateMediaById(id, formdata){
    try{
        const media = await axios.put(route+"/media/"+id, formdata);
        return media.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteMediaById(id){
    try{
        const media = await axios.delete(route+"/media/"+id);
        return media.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getMedias, createMedia, getMediaById, updateMediaById, deleteMediaById}