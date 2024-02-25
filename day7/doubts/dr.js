const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (line) => {
    userInput.push(line);
});

rl.on('close', () => {
  let numbers = userInput[0].split(' ').map(number => parseInt(number));
  console.log(numbers);
});