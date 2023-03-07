import engine from '../src/index.js';
import getRandomNumber from '../src/helpers.js';

export default function brainEven() {
  const conditionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (a) => (a % 2 === 0 ? 'yes' : 'no');
  const generateRoundEven = () => {
    const num = getRandomNumber(1, 100);
    const answerEven = (a) => isEven(a);
    return [num, answerEven(num)];
  };
  engine(conditionEven, generateRoundEven);
}
