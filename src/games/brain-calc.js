import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const calculate = (number1, number2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: return null;
  }
};
const generateRoundCalc = () => {
  const number1 = getRandomNumber(1, 5);
  const number2 = getRandomNumber(6, 10);
  const operators = ['+', '-', '*'];
  const numberOfOperators = operators.length;
  const randomOperator = operators[getRandomNumber(0, numberOfOperators)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, number2, randomOperator);
  return [question, answer];
};
const descriptionCalc = 'What is the result of the expression?';
const startBrainCalc = () => {
  gameEngine(descriptionCalc, generateRoundCalc);
};
export default startBrainCalc;
