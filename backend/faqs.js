const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();

const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const createFaq = async ( data ) => {
  data._id = new ObjectId();
  const faq = await client.connect()
  .then(async () => {
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('faqs');
    const json = await collection.insertOne(data);
    return json;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('faq creation completed, closing connection');
    client.close();
  });
  return faq;
};


const getFaqs = async () => {
  const faq = await client.connect()
  .then(async ()=>{
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('faqs');
    const json = await collection.find({}).toArray();
    return json;
  })
  .catch(()=>{
    console.log(err);
  })
  .finally(()=>{
    console.log('Get completed, closing connection');
    client.close();
  })
  return faq;
}


const updateFaq = async ( id, data ) => {
  const faq = await client.connect()
  .then(async ()=>{
    if (!ObjectId.isValid(id)) {
      return { message: "Invalid request" }
    }
    const filter = { _id: new ObjectId(id) };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('faqs');
    console.log(data);
    const json = await collection.updateOne(filter, { $set: data });
    return json;
  })
  .catch(()=>{
    console.log(err);
  })
  .finally(()=>{
    console.log('Update completed, closing connection');
    client.close();
  })
  return faq;
}

const deleteFaq = async ( id ) => {
  const faq = await client.connect()
  .then(async () => {
    if (!ObjectId.isValid(id)) {
      return { message: "Invalid request" }
    }
    const filter = { _id: new ObjectId(id) };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('faqs');
    const json = await collection.deleteOne(filter);
    return json;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Delete completed, closing connection');
    client.close();
  });
  return faq;
};


module.exports = { createFaq, getFaqs, updateFaq, deleteFaq };