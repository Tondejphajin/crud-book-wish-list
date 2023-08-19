import express from "express";
import connection from "./database.js";
import books from "./routes/books.js";

const app = express();
const port = 3000;

app.use(books);

app.listen(port);
