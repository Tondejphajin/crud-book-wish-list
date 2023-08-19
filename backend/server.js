import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Connected to the backend");
});

app.listen(port);
