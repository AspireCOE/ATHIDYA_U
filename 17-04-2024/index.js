import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

var file = fs.readFileSync("data.json");
const data = JSON.parse(file);

const port = 5000;

app.post("/api/v1/post", (request, response) => {
    data.push(request.body);
    fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
    });
    res.json(true);
});

app.get("/api/v1/get", (request, response) => {
    res.json(data);
});

app.get("/api/v1/user", (request, response) => {
    var ret = { status: "no data found" };
    var name = req.query["name"];
    data.forEach((ele) => {
        if (ele["name"] === name) {
            ret = ele;
        }
    });
    res.json(ret);
});

app.get("/api/v1/age/:age", (request, response) => {
    var ret = [];
    var age = req.params.age;
    data.forEach((ele) => {
        if (ele["age"] == age) {
            ret.push(ele);
        }
    });
    res.json(ret);
});

app.put("/api/v1/put", (request, response) => {
    var name = req.body.name;
    var age = req.body.age;
    var isAdmin = req.body.isAdmin;
    var comment = req.body.comment;
    data.forEach((ele) => {
        if (ele["name"] === name) {
            ele["age"] = age;
            ele["isAdmin"] = isAdmin;
            ele["comment"] = comment;
        }
    });
    fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
    });
    res.json(true);
});

app.delete("/api/v1/delete", (request, response) => {
    var name = req.query["name"];
    console.log(data);
    data.forEach((ele, index) => {
        console.log(ele, index);
        if (ele["name"] === name && ele !== null) {
            delete data[index];
        }
    });
    fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
    });
    res.json(true);
});

app.listen(port, () => {
    console.log(`Server active on http://localhost:${port} ...`);
});
