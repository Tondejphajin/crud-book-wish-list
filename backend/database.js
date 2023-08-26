import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "super_secret_pw",
  database: "books",
});

const createTableQuery = `
  CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cover VARCHAR(255),
    price DECIMAL(10, 2)
  );
`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("An error occurred: ", err);
    return;
  }
  console.log("Table created:", results);
});

export default connection;
