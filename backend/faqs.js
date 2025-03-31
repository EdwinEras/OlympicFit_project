const { ObjectId } = require('mongodb');
const { client } = require('./mongodbConnector');
require("dotenv").config();

const createFaq = async ( data ) => {
  data._id = new ObjectId();
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('faqs');
  const faq = await collection.insertOne(data)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return faq;
};


const getFaqs = async () => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('faqs');
  const faq = await collection.find({}).toArray()
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return faq;
}


const getFaqById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('faqs');
  const faq = await collection.findOne(filter)
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return faq;
}


const updateFaq = async ( id, data ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('faqs');
  console.log(data);
  const faq = await collection.updateOne(filter, { $set: data })
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return faq;
}

const deleteFaq = async ( id ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('faqs');
  const faq = await collection.deleteOne(filter)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return faq;
};


module.exports = { createFaq, getFaqs, getFaqById, updateFaq, deleteFaq };