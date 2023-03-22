import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const generateRoundEven = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return [question, answer];
};
const startBrainEven = () => {
  runEngine(description, generateRoundEven);
};
export default startBrainEven;
