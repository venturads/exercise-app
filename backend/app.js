const {MongoClient} = require('mongodb');
require("dotenv/config");

async function main(){
    const client = new MongoClient(process.env.ATLAS_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    try {
        await client.connect();
        await listDatabases(client);
    }   catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.err);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Dbases:");
databasesList.databases.forEach(db => console.log(' - ${db.course}'));
}