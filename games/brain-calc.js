import * as indexJs from '../src/index.js';
import * as helpersJs from '../src/helpers.js';

export default function brainCalc() {
  indexJs.helloAndIntroduction();
  let i = 0;
  helpersJs.conditionCalc();
  while (i < 3) {
    const number1 = helpersJs.getRandomNumber(1, 5);
    const number2 = helpersJs.getRandomNumber(5, 10);
    const operator = ['+', '-', '*'][helpersJs.getRandomNumber(0, 3)];
    helpersJs.calculateQuestion(number1, number2, operator);
    const qA = indexJs.questionAnswer();
    const correctAnswer = helpersJs.calculate(number1, number2, operator);
    if (Number(qA) === correctAnswer) {
      console.log('Correct!');
    } else {
      return indexJs.incorrectAnswer(qA, correctAnswer);
    } i += 1;
  } return i === 3 ? indexJs.finish() : null;
}
