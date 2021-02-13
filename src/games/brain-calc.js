import gameEngine from '../index.js';
import randomDigit from '../libs/random.js';

const operations = (index) => '+-*'[index];
const plus = (firstOperand, secondOperand) => firstOperand + secondOperand;
const minus = (firstOperand, secondOperand) => firstOperand - secondOperand;
const multiplication = (firstOperand, secondOperand) => firstOperand * secondOperand;
const calc = (firstOperand, secondOperand, operation) => {
  let result = 0;
  if (operation === '+') {
    result = plus(firstOperand, secondOperand);
  }
  if (operation === '-') {
    result = minus(firstOperand, secondOperand);
  }
  if (operation === '*') {
    result = multiplication(firstOperand, secondOperand);
  }
  return result;
};

const gameInCalc = () => {
  const firstOperand = randomDigit(1, 10);
  const secondOperand = randomDigit(1, 10);
  const operation = operations(randomDigit(0, 2));
  return {
    question: `${firstOperand} ${operation} ${secondOperand}`,
    answer: String(calc(firstOperand, secondOperand, operation)),
  };
};

export default () => gameEngine(gameInCalc);
