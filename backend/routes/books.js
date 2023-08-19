import express, { Router } from "express";
import connection from "../database.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Connected to the backend");
  const querry = "SELECT * FROM books.book";
  const db_res = connection.query(querry, (err, results, fields) => {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
  console.log(db_res);
});

export default router;
