import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
await client.connect();

const database = client.db("test");
const collection = database.collection("test");

// Read documents

Bun.serve({
    port: 3000,
    fetch: async (req) => {
        let url = new URL(req.url);
        if(url.pathname == "/getall") {
            const packages = await collection.find({}).toArray();
            return Response.json({ packages });
        }
        return Response.json({ "helo": "helo" });
    }
})