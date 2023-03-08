import gameEngine from '../src/index.js';
import getRandomNumber from '../src/helpers.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  } return String(gcd(b, a % b));
}
export default function brainGcd() {
  const conditionGcd = 'Find the greatest common divisor of given numbers.';
  const generateRoundGcd = () => {
    const number1 = getRandomNumber(1, 5);
    const number2 = getRandomNumber(6, 10);
    const gcdQuestion = `${number1} ${number2}`;
    return [gcdQuestion, gcd(number1, number2)];
  };
  gameEngine(conditionGcd, generateRoundGcd);
}
