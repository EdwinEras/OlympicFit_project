const { client } = require('./mongodbConnector');
const bcrypt = require('bcrypt');
require("dotenv").config();

const loginUser = async (email, password) => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  const user = await collection.findOne({ email });

  if (!user) return { message: "User not found" };

  const isMatch = await bcrypt.compare(password, user.password_hash);

  if (!isMatch) return { message: "Invalid credentials" };

  // Remove password before returning user
  const { password: _, ...safeUser } = user;

  return safeUser;
};

module.exports = { loginUser };
