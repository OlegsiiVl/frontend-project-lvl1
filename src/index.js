import readlineSync from 'readline-sync';

export const hello = () => 'Welcome to the Bain Games!';

export const question = (a) => `Question: ${a}`;

export const questionAnswer = () => readlineSync.question('Your answer: ');

export const incorrectUnswer = (a) => `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${a}!`;

export const incorrectUnswerCalc = (a) => `\nLet's try again, ${a}!`;
