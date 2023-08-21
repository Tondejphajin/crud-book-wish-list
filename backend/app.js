import express from "express";
import books from "./routes/books.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(books);

app.listen(port, () => {
  console.log("Connected to the backend");
});
