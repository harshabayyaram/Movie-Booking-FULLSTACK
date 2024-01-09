const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const initializeDatabase = require("./dbInit");
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


const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ ERROR: "YOU ARE NOT AUTHENTICATED" });
  } else {
    jwt.verify(token, "jwt-secret-token", (err, decoded) => {
      if (err) {
        return res.json({ ERROR: "TOKEN IS NOT CORRECT" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};


app.get("/", verifyUser, (req, res) => {
  if (req.session.role) {
    return res.json({ valid: true, role: req.session.role })
  } else {
    return res.json({ valid: false })
  }
})

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (name, email, password,role) VALUES (?, ?, ?,'user')";
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
      if (data.length > 0) {
        req.session.role = data[0].role;
        // console.log(req.session.name);
        const name = data[0].name;
        const idid = data[0].id;
        console.log(idid, "idd");//idddddddddddddd printing here
        const token = jwt.sign({ name }, "jwt-secret-token", { expiresIn: '1d' });
        res.cookie('token', token);
        return res.json({ login: true, name: req.session.name, id: data[0].id });//sending to frontend
      } else {
        return res.json({ login: false });
      }
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie('token')
  return res.json({ Status: "Success" })
})


//admin
app.get('/admin/users', (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
});


app.delete('/admin/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', userId, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json({ message: 'User deleted successfully' });
  });
});

//movies

app.get('/admin/movies', (req, res) => {
  db.query('SELECT * FROM movies', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
});

app.delete('/admin/movies/:id', (req, res) => {
  const movieId = req.params.id;
  db.query('DELETE FROM movies WHERE id = ?', movieId, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json({ message: 'Movie deleted successfully' });
  });
});

app.get('/admin/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users where id= ?', userId, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
});



//book ticket small table

app.post("/book-ticket", (req, res) => {
  const sql = "INSERT INTO userandmovies (userId, movieId) VALUES (?, ?)";
  console.log("data got in book ticket " + req.body[0] + req.body[1]);
  const values = [req.body[0], req.body[1]];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("Error book ticket sending from server", err);
      return res.json("error");
    }
    else {
      console.log("ticket data moved to the backed with userID and movieID");
      return res.json(data);
    }
  });
});

//manage boookings admin

app.get('/admin/managebookings', (req, res) => {
  const sql = 'SELECT u.name AS userName, m.movie_name, m.movie_date, m.movie_time, m.movie_amount FROM users u CROSS JOIN userandmovies um LEFT JOIN movies m ON m.id = um.movieid WHERE u.id = um.userId;'
  db.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(results);
  });
});


//each user booking list ***********************************
// Endpoint to fetch user bookings
app.get('/api/userbookings/:id', (req, res) => {
  const userId = req.params.id;
  console.log(req.params.id);

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

// Endpoint to delete a booking
app.delete('/api/deletebooking/:userId/:movieId', (req, res) => {
  const { userId, movieId } = req.params;
  console.log(req.params, "dafad");

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

// done *******************************************


// add movie
app.post("/addMovie", (req, res) => {
  const sql = "INSERT INTO movies (movie_name, movie_actor, movie_time,movie_date,movie_status,movie_amount,image_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [req.body.movietitle, req.body.movieactor, req.body.movietime, req.body.moviedate, , req.body.moviestatus, req.body.movieamount, req.body.imageurl];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("Error in backend adding movie", err);
      return res.json("error");
    }
    else {
      console.log("Data moved to movies table from backend");
      return res.json(data);
    }
  });
});

//edit movie

app.put("/editmovie/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body)
  // const sql = `UPDATE movies SET movie_name = ?, movie_actor = ?, movie_time = ?, movie_date = ?, movie_status = ?, movie_amount = ?, image_url = ? WHERE id = ?`
  const sql = `UPDATE movies SET movie_name = ?, movie_actor = ?, movie_time = ?, movie_date = ?, movie_status = ?, movie_amount = ?, image_url = ? WHERE id = ?;`
  const values = [req.body.movietitle, req.body.movieactor, req.body.movietime, req.body.moviedate, req.body.moviestatus, req.body.movieamount, req.body.imageurl, id];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("Error in backend editing movie", err);
      return res.json("error");
    }
    else {
      console.log("Data edited in movies table from backend");
      return res.json(data);
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


