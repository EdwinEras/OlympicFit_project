import axios from "axios";
const route = "http://localhost:3001"

async function getFaqs(){
    try{
        const faqs = await axios.get(route+"/faqs");
        return faqs.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createFaq(formdata){
    try{
        const faqs = await axios.post(route+"/faqs", formdata);
        return faqs.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getFaqById(id){
    try{
        const faqs = await axios.get(route+"/faqs/"+id);
        return faqs.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateFaqById(id, formdata){
    try{
        const faqs = await axios.put(route+"/faqs/"+id, formdata);
        return faqs.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteFaqById(id){
    try{
        const faqs = await axios.delete(route+"/faqs/"+id);
        return faqs.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getFaqs, createFaq, getFaqById, updateFaqById, deleteFaqById}