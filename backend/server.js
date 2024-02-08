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

app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

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