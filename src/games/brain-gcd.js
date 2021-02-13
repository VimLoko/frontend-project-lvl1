import gameEngine from '../index.js';
import randomDigit from '../libs/random.js';

const divisor = (firstNum, secondNum) => {
  const max = Math.max(firstNum, secondNum);
  const min = Math.min(firstNum, secondNum);
  if (max % min === 0) {
    return min;
  }
  let commonDivisor = 1;
  for (let i = 1; i <= min; i += 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
};
const description = 'Find the greatest common divisor of given numbers.';

const gameInGSD = () => {
  const firstNum = randomDigit(1, 10);
  const secondNum = randomDigit(1, 10);
  const commonDivisor = divisor(firstNum, secondNum);
  return {
    question: `${firstNum} ${secondNum}`,
    answer: String(commonDivisor),
  };
};

export default () => gameEngine(gameInGSD, description);
