import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const hasPrime = (num) => num % 2 === 0;
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
