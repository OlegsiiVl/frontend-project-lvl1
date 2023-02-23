import readlineSync from 'readline-sync';

export default function greetings() {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
}
