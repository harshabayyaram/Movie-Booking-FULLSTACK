const db = require("./db");

function initializeDatabase() {
  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(45) DEFAULT NULL,
      email varchar(45) DEFAULT NULL,
      password varchar(500) DEFAULT NULL,
      role varchar(45) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  `;

  const moviesTableQuery = `
    CREATE TABLE IF NOT EXISTS movies (
      id int NOT NULL AUTO_INCREMENT,
      movie_name varchar(45) DEFAULT NULL,
      movie_actor varchar(45) DEFAULT NULL,
      movie_time varchar(45) DEFAULT NULL,
      movie_date varchar(45) DEFAULT NULL,
      movie_status varchar(45) DEFAULT NULL,
      movie_amount varchar(45) DEFAULT NULL,
      image_url varchar(255) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  `;

  //query for insertion into movies table in sql
  const moviesInsertQuery = `
    INSERT IGNORE INTO movies (movie_name, movie_actor, movie_time, movie_date, movie_status, movie_amount, image_url)
    VALUES 
    ('saalar', 'prabhas', '10:30', '2024-01-03', 'block buster', '100', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQs0lsPPE6Bz2_YrhtcpniobzbXmNoxplVP1wKR_nEBCugHzfdV'),
    ('Devil', 'hero', '10:50', '2024-01-04', 'good', '200', 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devil-the-british-secret-agent-et00312544-1703578193.jpg'),
    ('Dunki', 'heroo', '12:00', '2024-01-05', 'blockbuster', '100', 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dunki-et00326964-1703064829.jpg');
  `;
  //query for insertion into Users table in sql
  const usersInsertQuery = `
    INSERT IGNORE INTO users (name, email, password, role)
    VALUES 
    ('Raju', 'Raju@gmail.com', 'Raju', 'user'),
    ('Ramu', 'Ramu@gmail.com', 'Ramu', 'user'),
    ('Ragu', 'Ragu@gmail.com', 'Ragu', 'user'),
    ('Manjula', 'Manjula@gmail.com', 'Manjula12345', 'user'),
    ('Harsha', 'bayyaramharsha@gmail.com', 'bayyaramharsha', 'admin'),
    ('Kaveri', 'kaveri2092k@gmail.com', 'kaveri2092k', 'user');
  `;

  //working with users table creation and user table demo data insertion

  db.query(usersTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Users table created.");
    const checkUsersTableQuery = `SELECT * FROM users`;

    db.query(checkUsersTableQuery, (err, userRows) => {
      if (err) throw err;

      // If the users table has no data, perform the insert
      if (userRows.length === 0) {


        db.query(usersInsertQuery, (err, results) => {
          if (err) throw err;
          console.log("Users data inserted.");
        });
      } else {
        console.log("Users data already exists. Skipping insertion.");
      }
    });

  });

  //working with movies table creation and movies table demo data insertion
  db.query(moviesTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Movies table created.");
    const checkMoviesTableQuery = `SELECT * FROM movies`;

    db.query(checkMoviesTableQuery, (err, movieRows) => {
      if (err) throw err;

      // If the movies table has no data, perform the insert
      if (movieRows.length === 0) {


        db.query(moviesInsertQuery, (err, results) => {
          if (err) throw err;
          console.log("Movies data inserted.");
        });
      } else {
        console.log("Movies data already exists. Skipping insertion.");
      }
    });


  });
}

module.exports = initializeDatabase;
