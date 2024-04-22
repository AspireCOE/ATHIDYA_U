import express from "express";

const app = express();
const PORT = 5000;

const check = (req, res, next) => {
    if (req.query["role"] === "admin") {
        next();
    } else {
        res.send("<h2>Check your Role</h2>");
    }
};

const nameCheck = (req, res, next) => {
    if (req.query["name"] === "" || req.query["name"] === undefined) {
        res.send("<h2>Check your name</h2>");
    } else {
        next();
    }
};

app.get("/", check, nameCheck, (req, res) => {
    res.send(`<h2>Hi Admin ${req.query["name"]}!!</h2>`);
});

app.listen(PORT, (req, res) => {
    console.log(`Server listening at ${PORT}`);
});
