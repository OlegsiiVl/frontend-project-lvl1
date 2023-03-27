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
  console.log(length);
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);
  const hiddenIndex = getRandomNumber(0, length);
  const question = generateProgression(length, start, step);
  const answer = String(question[hiddenIndex]);
  question[hiddenIndex] = '..';
  return [question.join(' '), answer];
};
const startBrainProgression = () => {
  runEngine(description, generateRoundProgression);
};
export default startBrainProgression;
