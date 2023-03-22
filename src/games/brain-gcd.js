import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } return gcd(b, a % b);
};
const descriptionGcd = 'Find the greatest common divisor of given numbers.';
const generateRoundGcd = () => {
  const number1 = getRandomNumber(1, 5);
  const number2 = getRandomNumber(6, 10);
  const Question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [Question, answer];
};
const startBrainGcd = () => {
  runEngine(descriptionGcd, generateRoundGcd);
};
export default startBrainGcd;
