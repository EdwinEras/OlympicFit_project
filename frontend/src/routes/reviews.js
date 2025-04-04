import axios from "axios";
const route = "http://localhost:3001"

async function getReviews(){
    try{
        const reviews = await axios.get(route+"/reviews");
        return reviews.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function createReview(formdata){
    try{
        const reviews = await axios.post(route+"/reviews", formdata);
        return reviews.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function getReviewById(id){
    try{
        const reviews = await axios.get(route+"/reviews/"+id);
        return reviews.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function updateReviewById(id, formdata){
    try{
        const reviews = await axios.put(route+"/reviews/"+id, formdata);
        return reviews.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

async function deleteReviewById(id){
    try{
        const reviews = await axios.delete(route+"/reviews/"+id);
        return reviews.data;
    }catch(err){
        console.log("Error: "+err);
    }
}

export {getReviews, createReview, getReviewById, updateReviewById, deleteReviewById}