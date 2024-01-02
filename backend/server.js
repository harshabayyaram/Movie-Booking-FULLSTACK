const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("Error in backend post", err);
      return res.json("error");
    }
    else {
      console.log("Data moved to data base from backend");
      return res.json(data);
    }

  });
});


app.post("/login", (req, res) => {
  const sql = "SELECT * from users WHERE email=? and password = ?";
  const values = [req.body.email, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("Error in backend post", err);
      return res.json("error");
    }
    else {
      if(data.length >0){
        return res.json("Success");
      }else{
        return res.json("Failure");
      }
    }

  });
});

db.query("select 1", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
    app.listen(8080, () => {
      console.log("Server running at 8080");
    });
  }
});


