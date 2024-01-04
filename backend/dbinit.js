// dbInit.js

const Connection = require("./db");

function initializeDatabase() {
    const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(45) DEFAULT NULL,
      email varchar(45) DEFAULT NULL,
      password varchar(500) DEFAULT NULL,
      role varchar(45) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  `;

    const moviesTableQuery = `
    CREATE TABLE IF NOT EXISTS movies (
      id int NOT NULL,
      movie_name varchar(45) DEFAULT NULL,
      movie_actor varchar(45) DEFAULT NULL,
      movie_time varchar(45) DEFAULT NULL,
      movie_date varchar(45) DEFAULT NULL,
      movie_status varchar(45) DEFAULT NULL,
      movie_amount varchar(45) DEFAULT NULL,
      image_url varchar(255) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  `;

    Connection.query(usersTableQuery, (err, results) => {
        if (err) throw err;
        console.log("Users table created or already exists.");
    });

    Connection.query(moviesTableQuery, (err, results) => {
        if (err) throw err;
        console.log("Movies table created or already exists.");
    });
}

module.exports = initializeDatabase;
