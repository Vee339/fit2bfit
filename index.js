// Importing the required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const trivia = require("./components/trivia/api.mjs").default;

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
  res.render("home/index", { title: "Sweat.Smile.Repeat." });
});

//quiz page
app.get("/quiz", async (req, res) => {
  let quizQuestions = await trivia.getQuizQuestions();
  res.render("quiz/quiz", { title: "Quiz", questions: quizQuestions });
});

// Set up the server listening
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
