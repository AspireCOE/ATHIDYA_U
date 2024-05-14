import { studentModel } from "../models/StudentSchema.js";

export const postStudent = async (req, res) => {
    const postbody = {
        name: req.body.name,
        gender: req.body.gender,
        physics: req.body.physics,
        maths: req.body.maths,
        english: req.body.english,
    };
    try {
        const student = new studentModel(postbody);
        await student.save();
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getStudent = async (req, res) => {
    try {
        const student = await studentModel.find({});
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updateStudent = async (req, res) => {
    const id = req.params.id;
    const putBody = {
        name: req.body.name,
        gender: req.body.gender,
        physics: req.body.physics,
        maths: req.body.maths,
        english: req.body.english,
    };
    try {
        const student = await studentModel.findByIdAndUpdate(id, putBody, {
            new: true,
        });
        res.send(student);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await studentModel.findByIdAndDelete(id);
        res.json(true);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
