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
const userRoutes = require("./routes/userRoutes");
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

app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

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