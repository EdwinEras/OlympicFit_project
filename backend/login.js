const { client } = require('./mongodbConnector');
const bcrypt = require('bcrypt');
require("dotenv").config();

const loginUser = async (email, password) => {
  const db = client.db(process.env.DBNAME);
  const collection = db.collection('users');

  const user = await collection.findOne({ email });

  if (!user) return { success: false, message: "User not found" };

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return { success: false, message: "Invalid credentials" };

  // Remove password before returning user
  const { password: _, ...safeUser } = user;

  return { success: true, user: safeUser };
};

module.exports = { loginUser };
