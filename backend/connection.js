const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://venturads:CATdog1221$@cluster0-nt3dp.mongodb.net/test?retryWrites=true&w=majority";

// const connectDB = async () => {
//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   console.log('db connected!!!!!!!!!');
// }

mongoose.connect( uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => { 
    console.log("we are connected")
}).catch(err => console.log(err));

//module.exports = connectDB;