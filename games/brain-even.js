import * as indexJs from '../src/index.js';
import * as helpersJs from '../src/helpers.js';

export default function brainEven() {
  const conditionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const num = randomNumber(1, 100);
  const answerEven = (a) => helpersJs.isEven(a);
  const questionEven = [num, answerEven(num)];
  indexJs.engine(questionEven, conditionEven);
}
