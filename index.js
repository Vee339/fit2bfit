// Importing the required modules
const express = require("express");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config();

// Setting the express
const app = express();
const port = process.env.PORT || "8888";

// Setting the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Setting up the folder for the static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// main page
app.get("/", async (req, res) => {
  res.render("home/index");
});

// Set up the server listening
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
