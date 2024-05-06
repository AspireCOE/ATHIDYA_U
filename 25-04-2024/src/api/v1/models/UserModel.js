import mongoose from "mongoose";

const UserLoginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    dateOfCreation: {
        type: Date,
        default: new Date(),
    },
});

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    houseNumber: {
        type: String,
        required: true,
        default: null,
    },
    streetName: {
        type: String,
        required: true,
        default: null,
    },
    district: {
        type: String,
        required: true,
        default: null,
    },
    state: {
        type: String,
        required: true,
        default: null,
    },
});

export const UserLoginModel = mongoose.model(
    "UsersLoginSchema",
    UserLoginSchema
);

export const UserModel = mongoose.model("UsersSchema", UserSchema);
