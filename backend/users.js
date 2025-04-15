const { ObjectId } = require('mongodb');
const { client } = require('./mongodbConnector');
const bcrypt = require('bcrypt');
require("dotenv").config();

const createUser = async (data) => {
  data._id = new ObjectId();

  if (data.password) {
    const saltRounds = 10;
    data.password_hash = await bcrypt.hash(data.password, saltRounds);
    delete data.password; // clean plain password
  }

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  try {
    const user = await collection.insertOne(data);
    return user;
  } catch (err) {
    console.error("DB Insert Error:", err);
    return { message: "DB ERROR" };
  }
};

const getUsers = async () => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  const users = await collection.find({}).toArray()
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return { message: "DB ERROR" };
    });
  return users;
};

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) return { message: "Invalid request" };

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  const user = await collection.findOne({ _id: new ObjectId(id) })
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return { message: "DB ERROR" };
    });
  return user;
};

const updateUser = async (id, data) => {
  if (!ObjectId.isValid(id)) return { message: "Invalid request" };

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  const user = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return { message: "DB ERROR" };
    });
  return user;
};

const deleteUser = async (id) => {
  if (!ObjectId.isValid(id)) return { message: "Invalid request" };

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  const user = await collection.deleteOne({ _id: new ObjectId(id) })
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return { message: "DB ERROR" };
    });
  return user;
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
