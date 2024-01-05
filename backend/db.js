const mysql = require("mysql");

const Connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "movie_booking",
  });

module.exports = Connection;