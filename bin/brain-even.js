#!/usr/bin/env node
import askName from '../src/cli.js';
import gameInEven from '../src/even/index.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
gameInEven(name);
