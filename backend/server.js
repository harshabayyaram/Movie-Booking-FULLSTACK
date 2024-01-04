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
  methods: ["POST", "GET", "DELETE"],
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


