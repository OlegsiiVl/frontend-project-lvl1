import gameEngine from '../index.js';
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
  const number = getRandomNumber(2, 20);
  const expectedAnswer = hasPrime(number) ? 'yes' : 'no';
  return [number, expectedAnswer];
};
const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startBrainPrime = () => {
  gameEngine(descriptionPrime, generateRoundPrime);
};
export default startBrainPrime;
