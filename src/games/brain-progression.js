import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  } return progression;
};
const progressionHiddenSymbol = (arr, hiddenIndex) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (hiddenIndex <= arr.length) {
      arr[hiddenIndex] = '..';
    }
  } return arr.join(' ');
};

const descriptionProgression = 'What number is missing in the progression?';
const generateRoundProgression = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 5);
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = generateProgression(length, start, step);
  const correctAnswer = progression[hiddenIndex];
  const question = progressionHiddenSymbol(progression, hiddenIndex);
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  gameEngine(descriptionProgression, generateRoundProgression);
};
export default startBrainProgression;
