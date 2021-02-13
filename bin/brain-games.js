#!/usr/bin/env node
import { askName } from '../src/index';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
