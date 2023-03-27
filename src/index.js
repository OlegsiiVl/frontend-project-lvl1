import readlineSync from 'readline-sync';

const runEngine = (description, generateRound) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const questionAnswer = readlineSync.question('Your answer: ');
    if (questionAnswer !== correctAnswer) {
      console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default runEngine;
