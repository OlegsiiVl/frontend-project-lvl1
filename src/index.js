import readlineSync from 'readline-sync';

const gameEngine = (gameCondition, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const getNamePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getNamePlayer}`);
  console.log(gameCondition);
  for (let i = 0; i < 3; i += 1) {
    const startGame = gameRound();
    console.log(`Question: ${startGame[0]}`);
    const questionAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(startGame[1]);
    if (questionAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getNamePlayer}!`);
    }
  } return console.log(`Congratulations, ${getNamePlayer}!`);
};
export default gameEngine;
