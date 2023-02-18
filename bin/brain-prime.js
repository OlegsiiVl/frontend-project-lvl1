#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionAnswer, hello, question, getRandomInt, isPrime,
} from '../src/index.js';

const brainPrime = () => {
  console.log(hello());
  const name = readlineSync.question('May I have your name? ');
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  // eslint-disable-next-line no-unreachable-loop
  while (i < 3) {
    const number = getRandomInt(0, 100);
    const q = question(number);
    console.log(q);
    const qA = questionAnswer();
    if (isPrime(number)) {
      answer = 'yes';
      i += 1;
    } else {
      answer = 'no';
      i += 1;
    }
    // eslint-disable-next-line no-unused-expressions
    answer === qA ? console.log('Correct!') : i -= 1 && console.log(incorrectAnswer(qA));
  }
  if (i === 3) {
    finish = `Congratulations, ${name}!`;
  }
  return finish;
};
console.log(brainPrime());
