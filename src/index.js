import readlineSync from 'readline-sync';

// приветствие игрока
export const name = {};
export function helloAndIntroduction() {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  name.player = namePlayer;
}
// вопрос
export const question = (a) => console.log(`Question: ${a}`);
// ответ на вопрос
export const questionAnswer = () => readlineSync.question('Your answer: ');
// не верный ответ на вопрос
export function incorrectAnswer(qA, correctAnswer) {
  console.log(`'${qA}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name.player}!`);
}
// верный ответ на вопрос
export const correctAnswer = (a) => a();
// конец игры
export function finish() {
  console.log(`Congratulations, ${name.player}!`);
}
// движок
export const engine = (conditionGame, round) => {
  helloAndIntroduction();
  console.log(conditionGame);
  for (let i = 0; i < 3; i += 1) {
    const q = round();
    question(q[0]);
    const qA = questionAnswer();
    const cA = q[1];
    if (qA === cA) {
      console.log('Correct!');
    } else {
      return incorrectAnswer(qA, cA);
    }
  } return finish();
};
