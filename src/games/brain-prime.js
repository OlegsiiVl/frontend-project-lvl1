import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const hasPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
};
const startBrainPrime = () => {
  const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateRoundPrime = () => {
    const number = getRandomNumber(2, 20);
    return [number, hasPrime(number)];
  };
  gameEngine(descriptionPrime, generateRoundPrime);
};
export default startBrainPrime;
