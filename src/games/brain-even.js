import gameEngine from '../index.js';
import randomDigit from '../libs/random.js';

const isEvenDigit = (digit) => (digit % 2 ? 'yes' : 'no');

const gameInEven = () => {
  const randDigit = randomDigit(1, 100);
  const resultRandEven = isEvenDigit(randDigit);
  return {
    question: randDigit,
    answer: resultRandEven,
  };
};

export default () => gameEngine(gameInEven);
