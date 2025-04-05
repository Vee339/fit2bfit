async function calculateScore(questions, answers) {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    // if(questions[i].correctAnswer === (answers.question + i))
    const key = "question" + i;
    const correctAnswer = questions[i].correctAnswer;
    const selectedAnswer = answers[key];
    if (correctAnswer === selectedAnswer) {
      score++;
    }
  }
  return score;
}

export default {
  calculateScore,
};
