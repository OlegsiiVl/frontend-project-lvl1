import readlineSync from 'readline-sync';

// приветствие игрока
export const name = {};
export function greetingInTheGame() {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  name.player = namePlayer;
}
// вопрос
export const questionFromTheGame = (a) => console.log(`Question: ${a}`);
// ответ на вопрос
export const answerToQuestion = () => readlineSync.question('Your answer: ');
// не верный ответ на вопрос
export function incorrectAnswer(questionAnswer, correctAnswer) {
  console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name.player}!`);
}
// конец игры
export function endGame() {
  console.log(`Congratulations, ${name.player}!`);
}
// движок
export default function gameEngine(gameCondition, round) {
  greetingInTheGame();
  console.log(gameCondition);
  for (let i = 0; i < 3; i += 1) {
    const startGame = round();
    questionFromTheGame(startGame[0]);
    const questionAnswer = answerToQuestion();
    const correctAnswer = startGame[1];
    if (questionAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return incorrectAnswer(questionAnswer, correctAnswer);
    }
  } return endGame();
}
