import gameEngine from '../src/index.js';
import getRandomNumber from '../src/helpers.js';

function calculate(number1, number2, operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default: return null;
  } return String(result);
}
export default function brainCalc() {
  const conditionCalc = 'What is the result of the expression?';
  const generateRoundCalc = () => {
    const number1 = getRandomNumber(1, 5);
    const number2 = getRandomNumber(6, 10);
    const operator = ['+', '-', '*'][getRandomNumber(0, 3)];
    const calculationQuestion = `${number1} ${operator} ${number2}`;
    const calculateAnswer = () => calculate(number1, number2, operator);
    return [calculationQuestion, calculateAnswer()];
  };
  gameEngine(conditionCalc, generateRoundCalc);
}
