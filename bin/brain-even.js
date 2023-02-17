#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionAnswer, hello, incorrectUnswer, question,
} from '../src/index.js';

const brainEven = () => {
  console.log(hello());
  const name = readlineSync.question('May I have your name? ');
  const res = [];
  let finish = '';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const q1 = question(13);
  console.log(q1);
  const q1A = questionAnswer();
  if (q1A === 'no') {
    res.push(1);
    console.log('Correct!');
  } else if (q1 !== 'no') {
    return incorrectUnswer(name);
  }
  const q2 = question(15);
  console.log(q2);
  const q2A = questionAnswer();
  if (q2A === 'no') {
    res.push(1);
    console.log('Correct!');
  } else if (q2 !== 'no') {
    return incorrectUnswer(name);
  }
  const q3 = question(17);
  console.log(q3);
  const q3A = questionAnswer();
  if (q3A === 'no') {
    res.push(1);
    console.log('Correct!');
  } else if (q3 !== 'no') {
    return incorrectUnswer(name);
  }
  if (res.length === 3) {
    finish = `Congratulations, ${name}!`;
  }
  return finish;
};
console.log(brainEven());
