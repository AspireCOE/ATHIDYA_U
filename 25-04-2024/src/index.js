import express from "express";
import database from "./config/DbConnection.js";
import UserRouter from "./api/v1/routes/UserRoutes.js";

const app = express();
app.use(express.json());

const port = 5000;

app.use("/api/v1/users", UserRouter);

app.listen(port, () => {
    console.log(`Server running on ${port} ...`);
});
