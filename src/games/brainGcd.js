import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};
const description = 'Find the greatest common divisor of given numbers.';
const generateRound = () => {
  const number1 = getRandomNumber(1, 5);
  const number2 = getRandomNumber(6, 10);
  const Question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return [Question, answer];
};
const startBrainGcd = () => {
  runEngine(description, generateRound);
};
export default startBrainGcd;
