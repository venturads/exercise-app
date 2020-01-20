const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://venturads:CATdog1221$@cluster0-nt3dp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useNewUrlParser: true
 });
client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  // perform actions on the collection object
  console.log("db connected: ", collection);
  client.close();
});

module.exports = client;

