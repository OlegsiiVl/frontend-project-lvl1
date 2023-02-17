import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};
