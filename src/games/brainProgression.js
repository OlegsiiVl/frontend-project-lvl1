import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
const description = 'What number is missing in the progression?';
const generateRoundProgression = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 5);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
const startBrainProgression = () => {
  runEngine(description, generateRoundProgression);
};
export default startBrainProgression;
