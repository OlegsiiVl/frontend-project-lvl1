import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const hasPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num < 2) {
      return false;
    } if (num % i === 0) {
      return false;
    }
  } return true;
};
const generateRoundPrime = () => {
  const question = getRandomNumber(2, 20);
  const answer = hasPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startBrainPrime = () => {
  runEngine(descriptionPrime, generateRoundPrime);
};
export default startBrainPrime;
