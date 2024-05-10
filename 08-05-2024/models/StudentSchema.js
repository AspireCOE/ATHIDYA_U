import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    physics: {
        type: Number,
        required: true,
    },
    maths: {
        type: Number,
        required: true,
    },
    english: {
        type: Number,
        required: true,
    },
});

export const studentModel = mongoose.model("Sample", studentSchema);
