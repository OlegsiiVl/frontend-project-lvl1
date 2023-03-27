import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`unknown operator ${operator}!`);
  }
};
const generateRoundCalc = () => {
  const number1 = getRandomNumber(1, 15);
  const number2 = getRandomNumber(6, 10);
  const operators = ['+', '-', '*'];

  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(calculate(number1, randomOperator, number2));
  return [question, answer];
};

const description = 'What is the result of the expression?';
const startBrainCalc = () => {
  runEngine(description, generateRoundCalc);
};
export default startBrainCalc;
