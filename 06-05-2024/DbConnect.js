import mongodb, { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";

const mongoClient = new mongodb.MongoClient(url);

var collectionLink;

export const db = async () => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("Aspire");
        collectionLink = db.collection("Sample");
        console.log(
            `Connected to database ${db.databaseName} from mongodb package ...`
        );
    } finally {
        await mongoClient.close();
    }
};

export const collection = collectionLink;
const cursorFind = collection.find();
const data = await cursorFind.toArray();
console.table(data);
