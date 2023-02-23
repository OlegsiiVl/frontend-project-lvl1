import readlineSync from 'readline-sync';
import getRandomNumber from './helpers.js';

const greetings = () => 'Welcome to the Brain Games!';
const question = (a, base = '') => `Question: ${a} ${base}`;
const questionAnswer = () => readlineSync.question('Your answer: ');
const calculateQuestion = (a, b, c) => `Question: ${a} ${c} ${b}`;
const number1 = getRandomNumber(1, 5);
const number2 = getRandomNumber(5, 10);
const operator = ['+', '-', '*'];
const rand = Math.floor(Math.random() * operator.length);
const operator1 = operator[rand];
function calculate() {
  let result = 0;
  switch (operator1) {
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

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};
function isEven(num) {
  const i = 2;
  if (num % i === 0) {
    return true;
  }
  return false;
}

export default function brainEven() {
  console.log(greetings());
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const number = getRandomNumber(1, 100);
    const q = question(number);
    console.log(q);
    const qA = questionAnswer();
    if (isEven(number)) {
      answer = 'yes';
      i += 1;
    } else {
      answer = 'no';
      i += 1;
    } if (answer === qA) {
      console.log('Correct!');
    } else {
      return console.log(incorrectAnswer(qA));
    }
  } if (i === 3) {
    finish = console.log(`Congratulations, ${name}!`);
  }
  return finish;
}

export function brainCalc() {
  console.log(greetings());
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('What is the result of the expression?');
  while (i < 3) {
    const q = calculateQuestion(number1, number2, operator1);
    console.log(q);
    const qA = questionAnswer();
    if (qA === calculate(number1, number2, operator1)) {
      answer = Number(qA);
      i += 1;
    } else if (qA !== calculate(number1, number2, operator1)) {
      answer = calculate(number1, number2, operator1);
      i += 1;
    }
    if (answer === Number(qA)) {
      console.log('Correct!');
    } else {
      return console.log(incorrectAnswer(qA));
    }
  }
  if (i === 3) {
    finish = console.log(`Congratulations, ${name}!`);
  }
  return finish;
}

export const brainPrime = () => {
  console.log(greetings());
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (i < 3) {
    const number = getRandomNumber(0, 100);
    const q = question(number);
    console.log(q);
    const qA = questionAnswer();
    if (isPrime(number)) {
      answer = 'yes';
      i += 1;
    } else {
      answer = 'no';
      i += 1;
    } if (answer === qA) {
      console.log('Correct!');
    } else {
      return console.log(incorrectAnswer(qA));
    }
    if (i === 3) {
      finish = console.log(`Congratulations, ${name}!`);
    }
  }
  return finish;
};

export function brainProgression() {
  console.log(greetings());
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let u = 0;
  let answer = '';
  let finish = '';
  console.log('What number is missing in the progression?');
  while (u < 3) {
    // Генерируем случайную длину прогрессии от 5 до 10
    const length = getRandomNumber(5, 10);
    // Генерируем случайную позицию скрытого элемента
    const hiddenIndex = getRandomNumber(0, length);
    // Генерируем случайный первый член прогрессии
    const start = getRandomNumber(0, 10);
    // Генерируем случайный шаг прогрессии от 2 до 5
    const step = getRandomNumber(2, 5);
    // Создаем массив прогрессии с скрытым элементом
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      if (i === hiddenIndex) {
        progression.push('..');
      } else {
        progression.push(start + i * step);
      }
    }
    const correctAnswer = start + hiddenIndex * step;
    // Выводим прогрессию на экран
    console.log(`Question: ${progression.join(' ')}`);
    // Запрашиваем ответ у пользователя
    answer = readlineSync.question('Your answer: ');
    const qA = answer;
    // Проверяем ответ и выводим соответствующее сообщение
    const incorrectAnswer = () => {
      console.log(`'${Number(qA)}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    };
    if (Number(qA) === correctAnswer) {
      console.log('Correct!');
    } else {
      return incorrectAnswer();
    }
    u += 1;
  } if (u === 3) {
    finish = console.log(`Congratulations, ${name}!`);
  }
  return finish;
}

export const brainGcd = () => {
  console.log(greetings());
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('Find the greatest common divisor of given numbers.');
  while (i < 3) {
    const q = question(number1, number2);
    console.log(q);
    const qA = questionAnswer();
    if (qA === gcd(number1, number2)) {
      answer = Number(qA);
      i += 1;
    } else if (qA !== gcd(number1, number2)) {
      answer = gcd(number1, number2);
      i += 1;
    }
    if (answer === Number(qA)) {
      console.log('Correct!');
    } else {
      return console.log(incorrectAnswer(qA));
    }
  }
  if (i === 3) {
    finish = console.log(`Congratulations, ${name}!`);
  }
  return finish;
};
