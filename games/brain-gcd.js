import * as indexJs from '../src/index.js';
import * as helpersJs from '../src/helpers.js';

export default function brainGcd() {
  indexJs.helloAndIntroduction();
  let i = 0;
  helpersJs.conditionGcd();
  while (i < 3) {
    const number1 = helpersJs.getRandomNumber(1, 5);
    const number2 = helpersJs.getRandomNumber(5, 10);
    indexJs.question(number1, number2);
    const qA = indexJs.questionAnswer();
    const correctAnswer = helpersJs.gcd(number1, number2);
    if (Number(qA) === helpersJs.gcd(number1, number2)) {
      console.log('Correct!');
    } else {
      return indexJs.incorrectAnswer(qA, correctAnswer);
    } i += 1;
  } return i === 3 ? indexJs.finish() : null;
}
