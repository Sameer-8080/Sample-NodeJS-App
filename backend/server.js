const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

// MySQL Connection
const db = mysql.createConnection({
  host: "database",
  user: "root",
  password: "rootpass",
  database: "ecommerce"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected!");
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
