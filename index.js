// Importing the required modules
const express = require("express");
const path = require("path");

// Setting the express
const app = express();
const port = process.env.PORT || "8888";

// main page
app.get("/", async (req, res) => {
  res.send("Your app is running successfully");
});

// Set up the server listening
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
