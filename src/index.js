import readlineSync from 'readline-sync';

export const greetings = () => 'Welcome to the Brain Games!';

export const question = (a, base = '') => `Question: ${a} ${base}`;

export const questionAnswer = () => readlineSync.question('Your answer: ');

export const incorrectUnswerCalc = (a) => `\nLet's try again, ${a}!`;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const brainCalcFunc = () => {
  const operator = ['+', '-', '*'];
  const operand = getRandomInt(0, 100);
  const operand1 = getRandomInt(50, 100);
  const rand = Math.floor(Math.random() * operator.length);
  return `Question: ${operand} ${operator[rand]} ${operand1}`;
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};
