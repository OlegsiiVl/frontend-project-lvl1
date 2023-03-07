// функционал для всех игр
export default function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
