import mongodb from "mongodb";

const url = "mongodb://localhost:27017/";

const mongoClient = new mongodb.MongoClient(url);

const db = async () => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("Aspire");
        const collection = db.collection("Sample");
        console.log("Connected to db from mongodb package ...");
    } finally {
        await mongoClient.close();
    }
};

export default db;
