const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();

const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const createReview = async ( data ) => {
  data._id = new ObjectId();
  const reviews = await client.connect()
  .then(async () => {
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('reviews');
    const json = await collection.insertOne(data);
    return json;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('reviews creation completed, closing connection');
    client.close();
  });
  return reviews;
};


const getReviews = async () => {
  const reviews = await client.connect()
  .then(async ()=>{
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('reviews');
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
  return reviews;
}


const updateReview = async ( id, data ) => {
  const reviews = await client.connect()
  .then(async ()=>{
    if (!ObjectId.isValid(id)) {
      return { message: "Invalid request" }
    }
    const filter = { _id: new ObjectId(id) };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('reviews');
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
  return reviews;
}

const deleteReview = async ( id ) => {
  const reviews = await client.connect()
  .then(async () => {
    if (!ObjectId.isValid(id)) {
      return { message: "Invalid request" }
    }
    const filter = { _id: new ObjectId(id) };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('reviews');
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
  return reviews;
};


module.exports = { createReview, getReviews, updateReview, deleteReview };