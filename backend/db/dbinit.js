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
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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

  //query for insertion of demo data into movies table in sql
  const moviesInsertQuery = `
    INSERT IGNORE INTO movies (movie_name, movie_actor, movie_time, movie_date, movie_status, movie_amount, image_url)
    VALUES 
    ('Guntur Karam', 'MAhesh babu', '12:00', '2022-01-14', 'blockbuster', '200', 'https://upload.wikimedia.org/wikipedia/en/3/3e/Guntur_Kaaram_film_poster.jpg'),
    ('Hanuman', 'Teja sajja', '12:00', '2022-03-14', 'blockbuster', '200', 'https://upload.wikimedia.org/wikipedia/en/b/bb/Hanu_Man_film_Release_poster.jpeg'),
    ('Salaar', 'Prabhas', '10:30', '2024-01-03', 'block buster', '100', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQs0lsPPE6Bz2_YrhtcpniobzbXmNoxplVP1wKR_nEBCugHzfdV'),
    ('Devil', 'Kalyan Ram', '10:50', '2024-01-04', 'good', '200', 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devil-the-british-secret-agent-et00312544-1703578193.jpg'),
    ('Dunki', 'Sharakuh khan', '12:00', '2024-01-05', 'blockbuster', '100', 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dunki-et00326964-1703064829.jpg'),
    ('Baahubali: The Beginning', 'Prabhas', '12:00', '2015-07-10', 'blockbuster', '95', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTANLW6o_XKmdd3zyIgBRb0OyEeqwB54QWJ7ZgJteucuSIZSEZE'),
    ('Arjun Reddy', 'Vijay Deverakonda', '12:00', '2017-08-25', 'blockbuster', '90', 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/arjun_reddy_5_1200x768.jpeg?VersionId=3H0leVN0O69r2CgJ5NRuwn823LhAZht9&size=690:388'),
    ('Rangasthalam', 'Ram Charan', '12:00', '2018-03-30', 'blockbuster', '92', 'https://contentserver.com.au/assets/644754_rangasthalam_v8.jpg'),
    ('AlaVaikunthapuramu', 'Allu Arjun', '12:00', '2020-01-12', 'blockbuster', '94', 'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg'),
    ('Pushpa: The Rise', 'Allu Arjun', '12:00', '2021-12-17', 'blockbuster', '93', 'https://assetscdn1.paytm.com/images/cinema/6-gallery-ef137e80-4228-11ec-96cd-1bf51c099a46.jpg'),
    ('Vakeel Saab', 'Pawan Kalyan', '12:00', '2021-04-09', 'blockbuster', '91', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDwGdPdKz23Ae6pwm8GrtTgw4p1solHu_tMOwQ8-lnk9Vlm25'),
    ('Love Story', 'Naga Chaitanya', '12:00', '2021-09-24', 'blockbuster', '88', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVEk6xd0PXrVfNwjDn7r_vHH7qEWKKD2ZkD6C1jMlrP9zoLwIh'),
    ('Tuck Jagadish', 'Nani', '12:00', '2021-09-10', 'blockbuster', '86', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvKHgEUHeUJzolSlHVv3jYQlq1vUT_nzn7S3tBj9rYiws8EaU'),
    ('Acharya', 'Chiranjeevi', '12:00', '2022-01-14', 'blockbuster', '90', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpTrrRAgjSY-zrPqL5awtjSnkG-tibw1xew&usqp=CAU'),
    ('Macharala', 'Nithin', '12:00', '2022-01-14', 'blockbuster', '100', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Macherla_Niyojakavargam_Poster.jpg/220px-Macherla_Niyojakavargam_Poster.jpg'),
    ('Kushi', 'Vijay', '12:00', '2022-01-14', 'blockbuster', '200', 'https://static.toiimg.com/photo/msid-103272997/103272997.jpg?75170');
  `;

  //query for insertion demo data into Users table in sql
  const usersInsertQuery = `
    INSERT IGNORE INTO users (name, email, password, role)
    VALUES 
    ('Harsha', 'bayyaramharsha@gmail.com', 'bayyaramharsha@gmail.com', 'admin'),
    ('Admin', 'admin@gmail.com', 'admin@gmail.com', 'admin'),
    ('Ramu', 'Ramu@gmail.com', 'Ramu@gmail.com', 'user'),
    ('Ragu', 'Ragu@gmail.com', 'Ragu@gmail.com', 'user'),
    ('Manjula', 'Manjula@gmail.com', 'Manjula@gmail.com', 'user'),
    ('Kaveri', 'kaveri2092k@gmail.com', 'kaveri2092k@gmail.com', 'user'),
    ('Alice', 'alice@example.com', 'alice@example.com', 'user'),
    ('Bob', 'bob@example.com', 'bob@example.com', 'user'),
    ('Charlie', 'charlie@example.com', 'charlie@example.com', 'user'),
    ('David', 'david@example.com', 'david@example.com', 'user');
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

  //mapping table query userId, movieId, date, time, seatNumber
  const userAndMoviesTableQuery = `
    CREATE TABLE IF NOT EXISTS userandmovies (
      id INT NOT NULL AUTO_INCREMENT,
      userId INT NULL,
      movieid VARCHAR(50) NULL,
      date VARCHAR(255) NULL,
      time VARCHAR(50) NULL,
      seatNumber VARCHAR(50) NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  `;

  // mapping table execution
  db.query(userAndMoviesTableQuery, (err, results) => {
    if (err) throw err;
    console.log("UserAndMovies table created.");
  });

  //events table 
  const eventTableQuery = `
  CREATE TABLE IF NOT EXISTS events (
    id int NOT NULL AUTO_INCREMENT,
    event_title varchar(45) DEFAULT NULL,
    event_date varchar(45) DEFAULT NULL,
    event_time varchar(45) DEFAULT NULL,
    event_place varchar(45) DEFAULT NULL,
    event_imageurl varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

  const eventInsertQuery = `
INSERT IGNORE INTO events (event_title, event_date, event_time, event_place, event_imageurl)
VALUES 
('Event1', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383640-tmpmudpskg-portrait.jpg"),
('Event2', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA5IEZlYiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371920-ugwkrawdks-portrait.jpg"),
('Event3', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371684-zhhpkftxhc-portrait.jpg"),
('Event4', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383196-mvjcbbdeae-portrait.jpg"),
('Event5', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371565-drdlvufnzt-portrait.jpg"),
('Event6', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyMyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377173-tunltvwueu-portrait.jpg"),
('Event7', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/et00381486-leephycfhe-portrait.jpg"),
('Event8', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373677-hrqpbwvwsu-portrait.jpg"),
('Event9', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00352262-ylxhhfjvkx-portrait.jpg"),
('Event10', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00329412-dauveekmhx-portrait.jpg");
`;

  db.query(eventTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Events table created.");
    const checkEventsTableQuery = `SELECT * FROM events`;

    db.query(checkEventsTableQuery, (err, userRows) => {
      if (err) throw err;

      // If the events table has no data, perform the insert
      if (userRows.length === 0) {
        db.query(eventInsertQuery, (err, results) => {
          if (err) throw err;
          console.log("Events data inserted.");
        });
      } else {
        console.log("Events data already exists. Skipping insertion.");
      }
    });
  });

  //Sports table 
  const sportsTableQuery = `
 CREATE TABLE IF NOT EXISTS sports (
   id int NOT NULL AUTO_INCREMENT,
   sport_title varchar(45) DEFAULT NULL,
   sport_date varchar(45) DEFAULT NULL,
   sport_time varchar(45) DEFAULT NULL,
   sport_place varchar(45) DEFAULT NULL,
   sport_imageurl varchar(255) DEFAULT NULL,
   PRIMARY KEY (id)
 ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

  const sportsInsertQuery = `
INSERT IGNORE INTO sports (sport_title, sport_date, sport_time, sport_place, sport_imageurl)
VALUES 
('Sport 1', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382028-wubrhmlqmn-portrait.jpg"),
('Sport 2', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382029-ycucrjukxj-portrait.jpg"),
('Sport 3', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 4', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 5', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 6', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 7', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 8', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 9', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg"),
('Sport 10', '12-01-2023', '21:00', 'Hyderabad', "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382030-xfvrwmeygs-portrait.jpg");
`;

  db.query(sportsTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Events table created.");
    const checkSportTableQuery = `SELECT * FROM sports`;

    db.query(checkSportTableQuery, (err, userRows) => {
      if (err) throw err;

      // If the sports table has no data, perform the insert
      if (userRows.length === 0) {
        db.query(sportsInsertQuery, (err, results) => {
          if (err) throw err;
          console.log("sports data inserted.");
        });
      } else {
        console.log("Sports data already exists. Skipping insertion.");
      }
    });
  });
}

module.exports = initializeDatabase;