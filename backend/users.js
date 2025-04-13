const { ObjectId } = require('mongodb');
const { client } = require('./mongodbConnector');
const bcrypt = require('bcrypt');
require("dotenv").config();

const createUser = async (data) => {
  data._id = new ObjectId();

  // Generate a username if one doesn't exist
  if (!data.username) {
    data.username = `user_${Date.now()}`;
  }

  // Hash password before saving
  if (data.password) {
    const saltRounds = 10;
    data.password = await bcrypt.hash(data.password, saltRounds);
    console.log("✅ Password after hashing:", data.password);
  }

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  try {
    const user = await collection.insertOne(data);
    return user;
  } catch (err) {
    console.error("❌ DB Insert Error:", err);
    return { message: "DB ERROR" };
  }
};

const getUsers = async () => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');
  try {
    const users = await collection.find({}).toArray();
    return users.map(({ password, ...u }) => u); // Strip password
  } catch (err) {
    console.error(err);
    return { message: "DB ERROR" };
  }
};

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) return { message: "Invalid request" };

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  try {
    const { password, ...user } = await collection.findOne({ _id: new ObjectId(id) });
    return user;
  } catch (err) {
    console.error(err);
    return { message: "DB ERROR" };
  }
};

const updateUser = async (id, data) => {
  if (!ObjectId.isValid(id)) return { message: "Invalid request" };

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  try {
    const user = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    return user;
  } catch (err) {
    console.error(err);
    return { message: "DB ERROR" };
  }
};

const deleteUser = async (id) => {
  if (!ObjectId.isValid(id)) return { message: "Invalid request" };

  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  try {
    const user = await collection.deleteOne({ _id: new ObjectId(id) });
    return user;
  } catch (err) {
    console.error(err);
    return { message: "DB ERROR" };
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
