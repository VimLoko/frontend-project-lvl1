import readlineSync from 'readline-sync';

const generateRandDigit = (start, end) => Math.floor(Math.random() * (end - start)) + end;
const isEvenDigit = (digit) => (digit % 2 ? 'yes' : 'no');
const loseMsg = (answer, result, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${userName}!`);
};
const winMsg = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
const askQuestion = (randDigit) => {
  console.log(`Question: ${randDigit}`);
};
const correctAnswerMsg = () => {
  console.log('Correct!');
};
const userAnswer = () => readlineSync.question('Your answer: ');

const gameInEven = (userName) => {
  let count = 3;
  let noerror = true;
  while (count && noerror) {
    const randDigit = generateRandDigit(1, 100);
    const resultRandEven = isEvenDigit(randDigit);
    askQuestion(randDigit);
    const answer = userAnswer();
    if (answer === resultRandEven) {
      count -= 1;
      correctAnswerMsg();
    } else {
      noerror = false;
      loseMsg(answer, resultRandEven, userName);
    }
  }
  if (!count) {
    winMsg(userName);
  }
};

export default gameInEven;
