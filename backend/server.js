import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "super_secret_pw",
  database: "books",
});

app.get("/", (req, res) => {
  console.log("Connected to the backend");
  const querry = "SELECT * FROM books.book";
  const db_res = connection.query(querry, (err, results, fields) => {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
  console.log(db_res);
});

app.listen(port);
