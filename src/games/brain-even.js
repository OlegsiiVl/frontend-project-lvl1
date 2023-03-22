import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const startBrainEven = () => {
  const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const hasEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const generateRoundEven = () => {
    const question = getRandomNumber(1, 100);
    const answer = hasEven(question);
    return [question, answer];
  };
  runEngine(descriptionEven, generateRoundEven);
};
export default startBrainEven;
