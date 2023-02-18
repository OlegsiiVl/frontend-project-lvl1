import readlineSync from 'readline-sync';

export const hello = () => 'Welcome to the Bain Games!';

export const question = (a) => `Question: ${a}`;

export const questionAnswer = () => readlineSync.question('Your answer: ');

export const incorrectUnswerCalc = (a) => `\nLet's try again, ${a}!`;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const brainCalcFunc = () => {
  const operator = ['+', '-', '*'];
  const operand = getRandomInt(0, 100);
  const operand1 = getRandomInt(50, 100);
  const rand = Math.floor(Math.random() * operator.length);
  return operand + operator[rand] + operand1;
};
