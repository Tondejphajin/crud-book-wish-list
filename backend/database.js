import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "super_secret_pw",
  database: "books",
});

export default connection;
