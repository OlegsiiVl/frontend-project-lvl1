// функционал для всех игр
export default function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// функционал brain-prime
export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return num !== 1;
}
export function conditionPrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}
// функционал brain-gcd
export function conditionGcd() {
  console.log('Find the greatest common divisor of given numbers.');
}
export function gcd(a, b) {
  if (b === 0) {
    return a;
  } return gcd(b, a % b);
}
// функционал brain-even
export function conditionEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
export function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}
// функционал brain-progression
export function conditionProgression() {
  console.log('What number is missing in the progression?');
}
export function array(progression, start, step, hiddenIndex, length) {
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
}
// функционал brain-calc
export function conditionCalc() {
  console.log('What is the result of the expression?');
}
export const calculateQuestion = (number1, number2, operator) => console.log(`Question: ${number1} ${operator} ${number2}`);
export function calculate(number1, number2, operator) {
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
    default:
      return null;
  }
  return result;
}
