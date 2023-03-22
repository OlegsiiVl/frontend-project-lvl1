import readlineSync from 'readline-sync';

const runEngine = (gameDescription, generateRound) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(gameDescription);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const questionAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answer;
    if (questionAnswer !== correctAnswer) {
      return console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${playerName}!`);
};
export default runEngine;
