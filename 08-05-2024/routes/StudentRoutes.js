import express from "express";
import {
    getStudent,
    postStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/UsersController.js";

const studentRouter = express.Router();

studentRouter.post("/", postStudent);
studentRouter.get("/", getStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

export default studentRouter;
