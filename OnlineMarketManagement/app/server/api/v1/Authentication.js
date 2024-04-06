import Database from "./Database.js";

export const signup = async (req, res) => {
    let checkQuery = `Select COUNT(username) AS data FROM Users WHERE username = ?`;
    let query = `INSERT INTO Users (username, password, email, phone) VALUES (?, ?, ?, ?)`;
    const values = [
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.phone,
    ];
    values.forEach((val) => {
        if (val === "" || val === null) {
            return false;
        }
    });
    const [checkData] = await Database.query(checkQuery, values);
    if (checkData[0].data === 1) {
        return false;
    }
    const result = await Database.query(query, values);
    return true;
};

export const login = async (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    if (
        username === null ||
        password === null ||
        username === "" ||
        password === ""
    ) {
        return false;
    }
    let checkQuery = `Select COUNT(username) AS data FROM Users WHERE username = ?`;
    let query = `SELECT password FROM Users WHERE username = ?`;
    let values = [username];
    const [checkData] = await Database.query(checkQuery, values);
    const [result] = await Database.query(query, values);
    if (checkData[0].data === 1) {
        if (result[0].password === password) {
            return true;
        }
    } else {
        return false;
    }
    return false;
};
