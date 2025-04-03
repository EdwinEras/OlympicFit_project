import axios from "axios";
const route = "http://localhost:3001"

async function getFaqs(){
    try{
        const data = await axios.get(route+"/faqs");
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createFaq(formdata){
    try{
        const data = await axios.post(route+"/faqs", formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getFaqById(id){
    try{
        const data = await axios.get(route+"/faqs/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateFaqById(id, formdata){
    try{
        const data = await axios.put(route+"/faqs/"+id, formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteFaqById(id){
    try{
        const data = await axios.delete(route+"/faqs/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getFaqs, createFaq, getFaqById, updateFaqById, deleteFaqById}