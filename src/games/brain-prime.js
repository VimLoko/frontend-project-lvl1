import gameEngine from '../index.js';
import randomDigit from '../libs/random.js';

const isPrime = (digit) => {
  if (digit === 1) {
    return 'no';
  }
  let count = 0;
  for (let i = 1; i <= digit; i += 1) {
    if (digit % i === 0) {
      count += 1;
    }
    if (count > 2) {
      return 'no';
    }
  }
  return 'yes';
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameInPrime = () => {
  const randDigit = randomDigit(1, 10);
  const resultRandEven = isPrime(randDigit);
  return {
    question: randDigit,
    answer: resultRandEven,
  };
};

export default () => gameEngine(gameInPrime, description);
