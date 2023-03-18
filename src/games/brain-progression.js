import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

function arrayProgression(progression, start, step, hiddenIndex, length) {
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
}
export default function startBrainProgression() {
  const conditionProgression = 'What number is missing in the progression?';
  const generateRoundProgression = () => {
    const length = getRandomNumber(5, 10);
    const hiddenIndex = getRandomNumber(0, length);
    const start = getRandomNumber(0, 10);
    const step = getRandomNumber(2, 5);
    const progression = [];
    arrayProgression(progression, start, step, hiddenIndex, length);
    const progressions = progression.join(' ');
    const correctAnswer = start + hiddenIndex * step;
    return [progressions, String(correctAnswer)];
  };
  gameEngine(conditionProgression, generateRoundProgression);
}
