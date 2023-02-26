import * as indexJs from '../src/index.js';
import * as helpersJs from '../src/helpers.js';

export default function brainEven() {
  indexJs.helloAndIntroduction();
  let i = 0;
  let answer = '';
  helpersJs.conditionEven();
  while (i < 3) {
    const number = helpersJs.getRandomNumber(1, 100);
    indexJs.question(number);
    const qA = indexJs.questionAnswer();
    if (helpersJs.isEven(number)) {
      answer = 'yes';
    } else if (!helpersJs.isEven(number)) {
      answer = 'no';
    } if (answer === qA) {
      console.log('Correct!');
    } else {
      return indexJs.incorrectAnswer(qA, answer);
    } i += 1;
  } return i === 3 ? indexJs.finish() : null;
}
