import { MongoClient } from "mongodb";
console.log("PROCESS", process.env);
const connectionString = process.env.ATLAS_URI || "";
// process.env.ATLAS_URI || "";
console.log("CONNECTION STRING", connectionString)

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
