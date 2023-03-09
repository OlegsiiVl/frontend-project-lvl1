import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

export default function brainEven() {
  const conditionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const hasEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const generateRoundEven = () => {
    const number = getRandomNumber(1, 100);
    return [number, hasEven(number)];
  };
  gameEngine(conditionEven, generateRoundEven);
}
