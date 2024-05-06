import express from "express";
import database from "./DbConnection.js";
import db from "./DbConnect.js";

// database from DbConnection.js is using mongoose
// db from DbConnect.js is using mongodb

const app = express();
app.use(express.json());

const port = 5000;

db();

app.get("/", (req, res) => {
    res.json();
});

app.listen(port, () => {
    console.log(`Server active on port ${port}`);
});
