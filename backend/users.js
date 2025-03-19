const { ObjectId } = require('mongodb');
const { client } = require('./mongodbConnector');
require("dotenv").config();

const createUser = async ( data ) => {
  data._id = new ObjectId();
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  const user = await collection.insertOne(data)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return user;
};

const getUsers = async () => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  const users = await collection.find({}).toArray()
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return users;
}

const updateUser = async ( id, data ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  const users = await collection.updateOne(filter, { $set: data })
  .then((json)=>{
    return json;
  })
  .catch(()=>{
    console.log(err);
    return { message: "DB ERROR" }
  });
  return users;
}

const deleteUser = async ( id ) => {
  if (!ObjectId.isValid(id)) {
    return { message: "Invalid request" }
  }
  const filter = { _id: new ObjectId(id) };
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  const user = await collection.deleteOne(filter)
  .then((json) => {
    return json;
  })
  .catch((err) => {
    console.log(err);
    return { message: "DB ERROR" }
  });
  return user;
};

module.exports = { createUser, getUsers, updateUser, deleteUser };