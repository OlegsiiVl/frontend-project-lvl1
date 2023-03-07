import engine from '../src/index.js';
import getRandomNumber from '../src/helpers.js';

export default function brainEven() {
  const conditionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (a) => (a % 2 === 0 ? 'yes' : 'no');
  const generateRoundEven = () => {
    const num = getRandomNumber(1, 100);
    return [num, isEven(num)];
  };
  engine(conditionEven, generateRoundEven);
}
