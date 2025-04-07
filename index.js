// Importing the required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const trivia = require("./components/trivia/api.mjs").default;
const score = require("./components/trivia/score.mjs").default;
const youtube = require("./components/youtube/videos.mjs").default;

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

let quizQuestions;

// main page
app.get("/", async (req, res) => {
  res.render("home/index", { title: "Sweat.Smile.Repeat." });
});

//quiz page
app.get("/quiz", async (req, res) => {
  quizQuestions = await trivia.getQuizQuestions();
  res.render("quiz/quiz", { title: "Quiz", questions: quizQuestions });
});

// submission page
app.post("/quiz/submit", async (req, res) => {
  const totalScore = await score.calculateScore(quizQuestions, req.body);
  res.render("quiz/result", { title: "Quiz Result", score: totalScore });
});

// Rendering the exercises page
app.get("/exercises", async (req, res) => {
  res.render("exercises/exercises", { title: "Exercises" });
});

// Searching the youtube videos
app.post("/exercises/search", async (req, res) => {
  let targetMuscle = req.body.muscle;
  let queryRequest = `${targetMuscle} muscle workout`;
  let formattedQuery = queryRequest.replaceAll(" ", "%20");
  let videos = await youtube.getSearchedVideos(formattedQuery);

  const videoIds = videos.items.map((item) => item.id.videoId);
  res.render("exercises/guides", { title: "Guides", videoIds: videoIds });
});

// Set up the server listening
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
