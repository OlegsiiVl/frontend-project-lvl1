import readlineSync from 'readline-sync';

export const greetingInTheGame = () => console.log('Welcome to the Brain Games!');
export const setQuestionGame = (a) => console.log(`Question: ${a}`);
export const getAnswerQuestion = () => readlineSync.question('Your answer: ');
export const incorrectAnswer = (questionAnswer, correctAnswer, getNamePlayer) => {
  console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getNamePlayer}!`);
};
export const endGame = (getNamePlayer) => {
  console.log(`Congratulations, ${getNamePlayer}!`);
};
const gameEngine = (gameCondition, gameRound) => {
  greetingInTheGame();
  const getNamePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getNamePlayer}`);
  console.log(gameCondition);
  for (let i = 0; i < 3; i += 1) {
    const startGame = gameRound();
    setQuestionGame(startGame[0]);
    const questionAnswer = getAnswerQuestion();
    const correctAnswer = startGame[1];
    if (questionAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return incorrectAnswer(questionAnswer, correctAnswer, getNamePlayer);
    }
  } return endGame(getNamePlayer);
};
export default gameEngine;
