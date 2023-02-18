#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionAnswer, greetings, gcd, getRandomInt, question,
} from '../src/index.js';

const brainGcd = () => {
  console.log(greetings());
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('Find the greatest common divisor of given numbers.');
  // eslint-disable-next-line no-unreachable-loop
  while (i < 3) {
    const number1 = getRandomInt(1, 25);
    const number2 = getRandomInt(25, 100);
    const q = question(number1, number2);
    console.log(q);
    const qA = questionAnswer();
    if (qA === gcd(number1, number2)) {
      answer = Number(qA);
      i += 1;
    // eslint-disable-next-line no-undef
    } else if (qA !== gcd(number1, number2)) {
      // eslint-disable-next-line no-undef
      answer = gcd(number1, number2);
      i += 1;
    }
    // eslint-disable-next-line no-unused-expressions
    answer === Number(qA) ? console.log('Correct!') : i -= 1 && console.log(incorrectAnswer(qA));
  }
  if (i === 3) {
    finish = `Congratulations, ${name}!`;
  }
  return finish;
};
console.log(brainGcd());
