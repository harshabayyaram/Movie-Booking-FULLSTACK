const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const initializeDatabase = require("./db/dbinit");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")

initializeDatabase();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "PUT", "GET", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());


app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
  }
}))

app.use("/api", authRoutes);
app.use("/admin", adminRoutes);

app.get('/user/selectMovie/:id', (req, res) => {
  const movieId = req.params.id;
  //console.log("select movie id", req.params.id);
  db.query('SELECT * FROM movies WHERE id = ?', movieId, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      //console.log(error, "getting error while selecting one movie backend");
      return;
    }
    res.json(results);
    //console.log(results, "NO error whiileselecting one movie");
  });
});

app.post("/book-ticket", (req, res) => {
  const sql = "INSERT INTO userandmovies (userId, movieId) VALUES (?, ?)";
  //console.log("data got in book ticket " + req.body[0] + req.body[1]);
  const values = [req.body[0], req.body[1]];
  db.query(sql, values, (err, data) => {
    if (err) {
      //console.log("Error book ticket sending from server", err);
      return res.json("error");
    }
    else {
      //console.log("ticket data moved to the backed with userID and movieID");
      return res.json(data);
    }
  });
});

app.get('/api/userbookings/:id', (req, res) => {
  const userId = req.params.id;
  //console.log(req.params.id);

  const getUserBookingsQuery = `
    SELECT u.id AS userId, m.id AS movieId, m.movie_name AS movieName, m.movie_date AS date, m.movie_time AS time
    FROM users u
    JOIN userandmovies um ON u.id = um.userId
    JOIN movies m ON um.movieid = m.id
    WHERE u.id = ${userId}
  `;

  db.query(getUserBookingsQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching user bookings' });
    } else {
      res.json(results);
    }
  });
});

app.delete('/api/deletebooking/:userId/:movieId', (req, res) => {
  const { userId, movieId } = req.params;
  //console.log(req.params, "dafad");

  const deleteBookingQuery = `
    DELETE FROM userandmovies
    WHERE userId = ${userId} AND movieid = ${movieId}
  `;

  db.query(deleteBookingQuery, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting booking BE' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'No matching booking found to delete' });
      } else {
        res.json({ message: `Booking with ID ${movieId} deleted successfully` });
      }
    }
  });
});

app.get('/events', (req, res) => {
  db.query('SELECT * FROM events', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
});

app.get('/sports', (req, res) => {
  db.query('SELECT * FROM sports', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
});

db.query("select 1", (err, res) => {
  if (err) {
    //console.log(err);
  } else {
    //console.log("Connected to database");
    app.listen(8080, () => {
      //console.log("Server running at 8080");
    });
  }
});