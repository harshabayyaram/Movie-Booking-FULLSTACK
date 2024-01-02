const mysql = require("mysql");

const Connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "booking_system",
  });

module.exports = Connection;