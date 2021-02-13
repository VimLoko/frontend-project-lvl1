import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');
const userAnswer = () => readlineSync.question('Your answer: ');

const loseMsg = (answer, result, userName) => `'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${userName}!`;
const winMsg = (userName) => `Congratulations, ${userName}!`;
const askQuestion = (randDigit) => `Question: ${randDigit}`;
const correctAnswerMsg = () => 'Correct!';
const welcomeMsg = () => 'Welcome to the Brain Games!';
const printcl = (message) => {
  console.log(message);
};

const gameEngine = (game) => {
  printcl(welcomeMsg());
  const userName = askName();
  let count = 3;
  let noerror = true;
  while (count && noerror) {
    const gameQA = game();
    printcl(askQuestion(gameQA.question));
    const answer = userAnswer();
    if (answer === gameQA.answer) {
      count -= 1;
      printcl(correctAnswerMsg());
    } else {
      noerror = false;
      printcl(loseMsg(answer, gameQA.answer, userName));
    }
  }
  if (!count) {
    printcl(winMsg(userName));
  }
};

export default gameEngine;
