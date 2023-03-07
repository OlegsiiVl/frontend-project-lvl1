import engine from '../src/index.js';
import getRandomNumber from '../src/helpers.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
}
export default function brainPrime() {
  const conditionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundPrime = () => {
    const number = getRandomNumber(1, 20);
    return [number, isPrime(number)];
  };
  engine(conditionPrime, roundPrime);
}
