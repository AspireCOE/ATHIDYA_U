import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const port = 5000;
const Url = "http://localhost:3000";

// POST
app.post("/addUser", (request, response) => {
    axios
        .post(Url + "/users", req.body)
        .then((resp) => {
            if (resp.status === 200 || resp.status === 201) {
                res.json(true);
            }
        })
        .catch((err) => {
            console.error(err);
        });
});

// GET, GET by query
app.get("/getUser", (request, response) => {
    var query = "";
    if (request.query["name"] !== undefined) {
        query = "?name=" + req.query["name"];
    } else {
        query = "";
    }
    axios
        .get(Url + "/users" + query)
        .then((resp) => {
            res.json(resp.data);
        })
        .catch((err) => {
            console.error(err);
        });
});

// GET by params
app.get("/getUser/:age", (request, response) => {
    var age = req.params.age;
    axios
        .get(Url + "/users?age=" + age)
        .then((resp) => {
            res.json(resp.data);
        })
        .catch((err) => {
            console.error(err);
        });
});

// PUT
app.put("/updateUser/:id", (request, response) => {
    axios
        .put(Url + "/users/" + req.params.id, req.body)
        .then((resp) => {
            if (resp.status === 200 || resp.status === 201) {
                res.json(true);
            }
        })
        .catch((err) => {
            console.error(err);
        });
});

// DELETE
app.delete("/deleteUser/:id", (request, response) => {
    axios
        .delete(Url + "/users/" + req.params.id)
        .then((resp) => {
            if (resp.status === 200 || resp.status === 201) {
                res.json(true);
            }
        })
        .catch((err) => {
            console.error(err);
        });
});

// PATCH
app.patch("/updateUser/:id", (request, response) => {
    axios
        .patch(Url + "/users/" + req.params.id, req.body)
        .then((resp) => {
            if (resp.status === 200 || resp.status === 201) {
                res.json(true);
            }
        })
        .catch((err) => {
            console.error(err);
        });
});

app.listen(port, (request, response) => {
    console.log(`Server running on port ${port}`);
});
