
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
    // Use connect method to connect to the server
    await client.connect()
    .then(async ()=>{
        console.log('Connected successfully to server');
    })
    .catch((err)=>{
        console.log(err);
        client.close();
    })
    .finally(()=>{
        console.log('Test completed, closing connection');
        // client.close();
    })
}

module.exports = { run, client };