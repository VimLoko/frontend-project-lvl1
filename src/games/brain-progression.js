import gameEngine from '../index.js';
import randomDigit from '../libs/random.js';

const progression = () => {
  const length = randomDigit(10, 10);
  const hidePosition = randomDigit(0, length - 1);
  const step = randomDigit(1, 10);
  let start = randomDigit(1, 10);
  const resultLine = [];
  for (let i = 0; i < length; i += 1) {
    resultLine.push(start);
    start += step;
  }
  const hideNum = resultLine[hidePosition];
  resultLine.splice(hidePosition, 1, '..');
  return {
    line: resultLine.join(' '),
    hide: hideNum,
  };
};
const description = 'What number is missing in the progression?';

const gameInProgression = () => {
  const progressionLine = progression();
  return {
    question: `${progressionLine.line}`,
    answer: String(progressionLine.hide),
  };
};

export default () => gameEngine(gameInProgression, description);
