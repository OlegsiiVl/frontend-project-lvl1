#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionAnswer, hello, brainCalcFunc,
} from '../src/index.js';

const brainCalc = () => {
  console.log(hello());
  const name = readlineSync.question('May I have your name? ');
  let i = 0;
  let finish = '';
  let answer = '';
  const incorrectAnswer = (a) => `'${a}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
  console.log('What is the result of the expression?');
  while (i < 3) {
    const q = brainCalcFunc();
    console.log(q);
    const qA = questionAnswer();
    // eslint-disable-next-line no-eval
    if (qA === eval(q)) {
      answer = Number(qA);
      i += 1;
    // eslint-disable-next-line no-eval
    } else if (qA !== eval(q)) {
      // eslint-disable-next-line no-eval
      answer = eval(q);
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

console.log(brainCalc());
