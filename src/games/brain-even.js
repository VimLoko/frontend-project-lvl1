import gameEngine from '../index.js';
import randomDigit from '../libs/random.js';

const isEvenDigit = (digit) => (digit % 2 ? 'no' : 'yes');
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameInEven = () => {
  const randDigit = randomDigit(1, 10);
  const resultRandEven = isEvenDigit(randDigit);
  return {
    question: randDigit,
    answer: resultRandEven,
  };
};

export default () => gameEngine(gameInEven, description);
