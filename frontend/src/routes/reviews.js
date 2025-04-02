import axios from "axios";
const route = "http://localhost:3001"

async function getReviews(){
    try{
        const data = await axios.get(route+"/reviews");
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createReview(formdata){
    try{
        const data = await axios.post(route+"/reviews", formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getReviewById(id){
    try{
        const data = await axios.get(route+"/reviews/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateReviewById(id, formdata){
    try{
        const data = await axios.put(route+"/reviews/"+id, formdata);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteReviewById(id){
    try{
        const data = await axios.delete(route+"/reviews/"+id);
        return data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getReviews, createReview, getReviewById, updateReviewById, deleteReviewById}