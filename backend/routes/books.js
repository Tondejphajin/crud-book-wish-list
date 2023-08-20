import express from "express";
import connection from "../database.js";

const router = express.Router();

router.get("/books", (req, res) => {
  const querry = "SELECT * FROM book";
  connection.query(querry, (err, results, _) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

router.post("/books", (req, res) => {
  const querry =
    "INSERT INTO book (id, name, description, cover, price) VALUES (?, ?, ?, ?, ?)";
  const values = [
    null,
    req.body.name,
    req.body.description,
    req.body.cover,
    req.body.price,
  ];

  connection.query(querry, values, (err, results, _) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "Book has been created successfully" });
    }
  });
});

export default router;
