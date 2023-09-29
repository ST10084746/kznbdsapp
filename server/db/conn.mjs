import pkg from "mongodb";
const {MongoClient} = pkg;

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Successfully connected to Atlas");
} catch(e) {
  console.error(e.stack);
}


let db = conn.db("records");

export default db;