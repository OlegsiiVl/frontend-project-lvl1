import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
    console.log(progression);
  }
  return progression;
};
const description = 'What number is missing in the progression?';
const generateRoundProgression = () => {
  const length = getRandomNumber(5, 10);
  console.log(length);
  const start = getRandomNumber(0, 100);
  console.log(start);
  const step = getRandomNumber(2, 5);
  console.log(step);
  const hiddenIndex = getRandomNumber(0, length);
  console.log(hiddenIndex);
  const question = generateProgression(length, start, step);
  const answer = String(question[hiddenIndex]);
  question[hiddenIndex] = '..';
  return [question.join(' '), answer];
};
const startBrainProgression = () => {
  runEngine(description, generateRoundProgression);
};
export default startBrainProgression;
