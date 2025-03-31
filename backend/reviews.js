const { ObjectId } = require('mongodb');
const { client } = require('./mongodbConnector');
require("dotenv").config();

const createReview = async ( data ) => {
  data._id = new ObjectId();
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('reviews');
  const reviews = await collection.insertOne(data)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return reviews;
};

const getReviews = async () => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('reviews');
  const reviews = await collection.find({}).toArray()
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return reviews;
}


const getReviewById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('reviews');
  const review = await collection.findOne(filter)
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return review;
}


const updateReview = async ( id, data ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('reviews');
  const reviews = await collection.updateOne(filter, { $set: data })
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return reviews;
}

const deleteReview = async ( id ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('reviews');
  const reviews = await collection.deleteOne(filter)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return reviews;
};


module.exports = { createReview, getReviews, getReviewById, updateReview, deleteReview };