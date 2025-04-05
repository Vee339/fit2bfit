const triviaUrl = `https://the-trivia-api.com/v2/questions?categories=sport_and_leisure&limit=7&difficulties=easy,medium`;

// Funtion to get the questions from the API
async function getQuizQuestions() {
  let response = await fetch(triviaUrl, {
    header: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export default {
  getQuizQuestions,
};
