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

const getMedia = async () => {
    const media = await client.connect()
    .then(async ()=>{
        const db = client.db(process.env.DBNAME);
        const collection = db.collection('media');
        const json = await collection.find({}).toArray();
        return json;
    })
    .catch(()=>{
        console.log(err);
        console.log("error ocurred");
        client.close();
    })
    .finally(()=>{
        console.log('Test completed, closing connection');
        client.close();
    })
    return media;
}

module.exports = getMedia;