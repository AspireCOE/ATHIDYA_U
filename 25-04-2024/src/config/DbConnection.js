import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

const database = mongoose.connection;

database.on("error", (err) => {
    console.log(err);
});

database.on("connected", () => {
    console.log(`Connected to database`);
});

export default database;
