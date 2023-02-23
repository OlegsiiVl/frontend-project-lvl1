import readlineSync from 'readline-sync';

export default greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};
