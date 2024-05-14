import express from "express";
import database from "./config/DbConnection.js";
import studentRouter from "./routes/StudentRoutes.js";

const app = express();
app.use(express.json());

const port = 5000;

app.use("/students", studentRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port} ...`);
});
