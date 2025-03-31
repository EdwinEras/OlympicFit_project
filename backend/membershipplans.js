const { ObjectId } = require('mongodb');
const { client } = require('./mongodbConnector');
require("dotenv").config();


const createMemPlan = async ( data ) => {
  data._id = new ObjectId();
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('membershipplans');
  const memplan = await collection.insertOne(data)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return memplan;
};


const getMemPlans = async () => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('membershipplans');
  const memplan = await collection.find({}).toArray()
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return memplan;
}


const getMemPlanById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('membershipplans');
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


const updateMemPlan = async ( id, data ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('membershipplans');
  const memplan = await collection.updateOne(filter, { $set: data })
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return memplan;
}


const deleteMemPlan = async ( id ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('membershipplans');
  const memplan = await collection.deleteOne(filter)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return memplan;
};


module.exports = { createMemPlan, getMemPlans, getMemPlanById, updateMemPlan, deleteMemPlan };