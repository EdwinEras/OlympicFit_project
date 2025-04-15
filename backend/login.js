const { client } = require('./mongodbConnector');
const bcrypt = require('bcrypt');
require("dotenv").config();

const loginUser = async (email, password) => {
  try {
    if (typeof email !== 'string' || typeof password !== 'string') {
      return { success: false, message: "Invalid input types" };
    }

    const db = client.db(process.env.DBNAME);
    const collection = db.collection('users');
    const user = await collection.findOne({ email });

    if (!user) return { success: false, message: "User not found" };
    if (!user.password_hash) return { success: false, message: "Password not set for this user" };

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) return { success: false, message: "Invalid credentials" };

    const { password_hash, ...safeUser } = user;
    return { success: true, user: safeUser };

  } catch (err) {
    console.error(" Login error:", err);
    return { success: false, message: "Internal server error" };
  }
};

module.exports = { loginUser };
