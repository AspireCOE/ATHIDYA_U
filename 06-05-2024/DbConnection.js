import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Aspire");

const database = mongoose.connection;

database.on("error", (err) => {
    console.log(err);
});

database.on("connected", () => {
    console.log(`Connected to database from mongoose package ...`);
});

export default database;
