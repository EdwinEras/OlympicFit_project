const { client } = require('./mongodbConnector');
require("dotenv").config();

const loginUser = async (email, password) => {
    const filter = { email:email, password_hash:password };
    const db = client.db(process.env.DBNAME);
    const collection = db.collection('users');
    const user = await collection.findOne(filter)
    .then((json)=>{
        return json;
    })
    .catch(()=>{
        console.log(err);
        return { message: "DB ERROR" }
    });
    console.log(user);
    return user;
}

module.exports = { loginUser };