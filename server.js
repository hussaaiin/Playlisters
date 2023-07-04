const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("./config/Auth/passportConfig");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const MongoStore = require("connect-mongo")(session);

const app = express();

require("dotenv").config(); // Load environment variables from .env file

app.use(
  session({
    secret: "your-secret-value", // Provide a secure and random secret value here
    // Other session configuration options...
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public")); // Serve static files
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//<--import routers-->>
const playlistRoute = require("./routes/Playlists");
const authRoute = require("./routes/auth");

//<--mount routes-->>

app.use("/", playlistRoute);
app.use("/", authRoute);

const port = 4004;

app.listen(process.env.PORT, function () {
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
