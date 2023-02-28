import * as indexJs from '../src/index.js';
import * as helpersJs from '../src/helpers.js';

export default function brainProgression() {
  indexJs.helloAndIntroduction();
  let u = 0;
  helpersJs.conditionProgression();
  while (u < 3) {
    const length = helpersJs.getRandomNumber(5, 10);
    const hiddenIndex = helpersJs.getRandomNumber(0, length);
    const start = helpersJs.getRandomNumber(0, 10);
    const step = helpersJs.getRandomNumber(2, 5);
    const progression = [];
    helpersJs.array(progression, start, step, hiddenIndex, length);
    const arr = progression.join(' ');
    indexJs.question(arr);
    const correctAnswer = start + hiddenIndex * step;
    const qA = indexJs.questionAnswer();
    if (+qA === correctAnswer) {
      console.log('Correct!');
    } else {
      return indexJs.incorrectAnswer(qA, correctAnswer);
    } u += 1;
  } return u === 3 ? indexJs.finish() : null;
}
