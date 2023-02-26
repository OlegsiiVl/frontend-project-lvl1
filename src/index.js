import readlineSync from 'readline-sync';

// приветствие игрок
export const name = {};
export function helloAndIntroduction() {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  name.player = namePlayer;
}
// вопрос
export const question = (a, base = '') => console.log(`Question: ${a} ${base}`);
// ответ на вопрос
export const questionAnswer = () => readlineSync.question('Your answer: ');
// не верный ответ на вопрос
export function incorrectAnswer(qA, correctAnswer) {
  console.log(`'${qA}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name.player}!`);
}
// конец игры
export function finish() {
  console.log(`Congratulations, ${name.player}!`);
}
