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
      console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${playerName}!`);
};
export default runEngine;
