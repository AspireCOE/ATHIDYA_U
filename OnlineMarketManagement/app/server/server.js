import express from "express";
import cors from "cors";
import { signup, login } from "./api/v1/Authentication.js";

const app = express();
app.use(express.json());
const port = 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.post("/api/v1/register", async (req, res) => {
    res.json(await signup(req, res));
});
app.get("/api/v1/login", async (req, res) => {
    res.json(await login(req, res));
});

app.listen(port, () => {
    console.log(`Server active on http://localhost:${port} ...`);
});
