import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const startBrainEven = () => {
  const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const hasEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const generateRoundEven = () => {
    const number = getRandomNumber(1, 100);
    return [number, hasEven(number)];
  };
  gameEngine(descriptionEven, generateRoundEven);
};
export default startBrainEven;
