const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("./config/Auth/passportConfig");

const app = express();

require("dotenv").config(); // Load environment variables from .env file

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 600000000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public")); // Serve static files
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//<--import routers-->>
const playlistRoute = require("./routes/Playlists");

//<--mount routes-->>

app.use("/", playlistRoute);

const port = 4000;

app.listen(port, function () {
  console.log("Server running on port 4000");
});

mongoose
  .connect(process.env.MONGODB_URI, {
    // Use environment variable for connection string
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("mongoDB connected");
  })
  .catch(function (err) {
    console.log("mongoDB error: " + err.message);
  });
