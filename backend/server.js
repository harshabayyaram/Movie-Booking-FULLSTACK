const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const initializeDatabase = require("./db/dbinit");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const port = process.env.PORT || 8080;

// initializeDatabase();

app.use(cors({
  origin: ["http://localhost:3000", "https://movie-ticket-booking-react.netlify.app"],
  methods: ["POST", "PUT", "GET", "DELETE"],
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: 1000 * 60 * 60 * 24,
  }
}))

// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.json({ ERROR: "YOU ARE NOT AUTHENTICATED" });
//   } else {
//     jwt.verify(token, "jwt-secret-token", (err, decoded) => {
//       if (err) {
//         return res.json({ ERROR: "TOKEN IS NOT CORRECT" });
//       } else {
//         req.name = decoded.name;
//         // req.userId = decoded.userId;
//         // req.userName = decoded.name;
//         // req.userRole = decoded.role;
//         next();
//       }
//     });
//   }
// };


const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // No token provided
    return res.status(401).json({ error: 'Unauthorized - Missing Authorization Header' });
  }

  const token = authHeader.split(' ')[1]; // removes bearer and takes only taken then compares it... :> )
  if (!token) {
    // Token is invalid or missing
    return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
  }


  jwt.verify(token, "jwt-secret-token", (err, decoded) => {
    if (err) {
      // Token verification failed
      return res.status(403).json({ error: 'Forbidden - Invalid Token' });
    } else {
      // Token is valid, extract user information and proceed
      req.userId = decoded.userId;
      req.userName = decoded.name;
      req.userRole = decoded.role;
      next();
    }
  });
};

app.get("/", verifyUser, (req, res) => {
  console.log(req.cookies);
  if (req.session.role) {
      return res.json({ valid: true, role: req.session.role, token: req.cookies.token })
  } else {
      return res.json({ valid: false })
  }
})

// app.use("/", verifyUser);
app.use("/", authRoutes);
app.use("/admin", verifyUser, adminRoutes);
app.use("/user", verifyUser, userRoutes);

db.query("select 1", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server running at ${port} `);
    });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}); 