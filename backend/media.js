const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();

const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const createMedia = async ( data ) => {
  data._id = new ObjectId();
  const media = await client.connect()
  .then(async () => {
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('media');
    const json = await collection.insertOne(data);
    return json;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('media creation completed, closing connection');
    client.close();
  });
  return media;
};


const getMedias = async () => {
  const media = await client.connect()
  .then(async ()=>{
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('media');
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
  return media;
}


const updateMedia = async ( id, data ) => {
  const media = await client.connect()
  .then(async ()=>{
    if (!ObjectId.isValid(id)) {
      return { message: "Invalid request" }
    }
    const filter = { _id: new ObjectId(id) };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('media');
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
  return media;
}

const deleteMedia = async ( id ) => {
  const media = await client.connect()
  .then(async () => {
    if (!ObjectId.isValid(id)) {
      return { message: "Invalid request" }
    }
    const filter = { _id: new ObjectId(id) };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('media');
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
  return media;
};


module.exports = { createMedia, getMedias, updateMedia, deleteMedia };