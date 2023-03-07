import engine from '../src/index.js';
import getRandomNumber from '../src/helpers.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  } return String(gcd(b, a % b));
}
export default function brainGcd() {
  const conditionGcd = 'Find the greatest common divisor of given numbers.';
  const roundGcd = () => {
    const number1 = getRandomNumber(1, 5);
    const number2 = getRandomNumber(6, 10);
    const questionGcd = `${number1} ${number2}`;
    const answerGcd = (a, b) => gcd(a, b);
    return [questionGcd, answerGcd(number1, number2)];
  };
  engine(conditionGcd, roundGcd);
}
