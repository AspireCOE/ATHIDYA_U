import express from "express";
import {
    GetUser,
    GetUserById,
    PostUser,
    DeleteUser,
} from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", GetUser);

UserRouter.get("/:id", GetUserById);

UserRouter.post("/", PostUser);

UserRouter.delete("/", DeleteUser);

export default UserRouter;
