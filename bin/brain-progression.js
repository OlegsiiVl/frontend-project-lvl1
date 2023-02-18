#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { hello } from '../src/index.js';

const brainProgression = () => {
  console.log(hello());
  const name = readlineSync.question('May I have your name? ');
  let u = 0;
  let answer = '';
  let finish = '';
  console.log('What number is missing in the progression?');
  while (u < 3) {
    // eslint-disable-next-line no-use-before-define, no-loop-func
    const incorrectAnswer = () => `'${answer}' is wrong answer ;(. Correct answer was '${start + hiddenIndex * step}'.\nLet's try again, ${name}!`;
    // Генерируем случайную длину прогрессии от 5 до 10
    const length = Math.floor(Math.random() * 6) + 5;

    // Генерируем случайную позицию скрытого элемента
    const hiddenIndex = Math.floor(Math.random() * length);

    // Генерируем случайный первый член прогрессии
    const start = Math.floor(Math.random() * 10);

    // Генерируем случайный шаг прогрессии от 2 до 5
    const step = Math.floor(Math.random() * 4) + 2;

    // Создаем массив прогрессии с скрытым элементом
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      if (i === hiddenIndex) {
        progression.push('..');
      } else {
        progression.push(start + i * step);
      }
    }

    // Выводим прогрессию на экран
    console.log(`Question: ${progression.join(' ')}`);

    // Запрашиваем ответ у пользователя
    // eslint-disable-next-line no-shadow
    answer = readlineSync.question('Your answer: ');

    // Проверяем ответ и выводим соответствующее сообщение
    if (Number(answer) === start + hiddenIndex * step) {
      console.log('Correct!');
    } else {
      return incorrectAnswer();
    // u -= 1;
    }
    u += 1;
  } if (u === 3) {
    finish = `Congratulations, ${name}!`;
  }
  return finish;
};

console.log(brainProgression());
