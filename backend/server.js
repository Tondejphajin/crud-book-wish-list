import express from "express";
import books from "./routes/books.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(books);

app.listen(port, () => {
  console.log("Connecte to the backend");
});
