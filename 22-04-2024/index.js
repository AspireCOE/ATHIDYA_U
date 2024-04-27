import express from "express";

const app = express();
const PORT = 5000;

const check = (request, res, next) => {
    if (request.query["role"] === "admin") {
        next();
    } else {
        res.send("<h2>Check your Role</h2>");
    }
};

const nameCheck = (request, res, next) => {
    if (request.query["name"] === "" || req.query["name"] === undefined) {
        res.send("<h2>Check your name</h2>");
    } else {
        next();
    }
};

app.get("/", check, nameCheck, (request, response) => {
    res.send(`<h2>Hi Admin ${req.query["name"]}!!</h2>`);
});

app.listen(PORT, (request, response) => {
    console.log(`Server listening at ${PORT}`);
});
