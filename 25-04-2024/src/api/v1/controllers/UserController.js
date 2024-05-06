import { UserLoginModel } from "../models/UserModel.js";

export const GetUser = (req, res) => {
    return res.json();
};

export const GetUserById = (req, res) => {
    var id = req.params.id;
};

export const PostUser = async (req, res) => {
    let postBody = new UserLoginModel({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
    });
    try {
        const postData = postBody.save();
        res.status(201).json(postData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const DeleteUser = (req, res) => {
    var id = req.params.id;
};
