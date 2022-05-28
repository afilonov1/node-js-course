#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

console.log("Загадано число в диапазоне от 0 до 100");
const targetNum = Math.floor(Math.random() * 100 + 1);

rl.on('line', (input) => {
    const inputedNum = +input;
    if (inputedNum < targetNum) {
        console.log("Больше");
    } else if (inputedNum > targetNum) {
        console.log("Меньше");
    } else {
        console.log(`Отгадано число ${targetNum}`);
        rl.close();
    }
  });