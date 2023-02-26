import * as indexJs from '../src/index.js';
import * as helpersJs from '../src/helpers.js';

export default function brainPrime() {
  indexJs.helloAndIntroduction();
  let i = 0;
  let answer = '';
  helpersJs.conditionPrime();
  while (i < 3) {
    const number = helpersJs.getRandomNumber(0, 20);
    indexJs.question(number);
    const qA = indexJs.questionAnswer();
    if (helpersJs.isPrime(number)) {
      answer = 'yes';
    } else {
      answer = 'no';
    } if (answer === qA) {
      console.log('Correct!');
    } else {
      return indexJs.incorrectAnswer(qA, answer);
    } i += 1;
  } return i === 3 ? indexJs.finish() : null;
}
