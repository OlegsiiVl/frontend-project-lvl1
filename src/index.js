import readlineSync from 'readline-sync';

export const hello = () => 'Welcome to the Bain Games!';

export const question = (a) => `Question: ${a}`;

export const questionAnswer = () => readlineSync.question('Your answer: ');

export const incorrectUnswerCalc = (a) => `\nLet's try again, ${a}!`;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
