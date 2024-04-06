import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const Database = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    })
    .promise();

export default Database;

// async function getUsers() {
//     const [data] = await Database.query("SELECT * FROM Users");
//     return data;
// }

// async function getUserWithName(username) {
//     const [data] = await Database.query(
//         `
//         SELECT * FROM Users
//         WHERE username = ?
//     `,
//         [username]
//     );
//     return data[0];
// }

// const data = await getUserWithName("admin");
// console.log(data);
