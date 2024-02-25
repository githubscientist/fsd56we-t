const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (line) => {
    userInput.push(line);
});

rl.on('close', () => {
    let [first, second] = userInput[0].split(' ');
    first = first.split('').map(val => parseInt(val))
    second = second.split('').map(val => parseInt(val));

    let total = [];

    if (first.length < second.length) {
        // first is the smallest
        for (let i = first.length - 1, j=second.length-1; i >= 0; i--, j--){
            let sum = first[i] + second[j];
            total.unshift(sum % 10);
        }

        second = second.slice(0, second.length - first.length);

        for (let i = second.length - 1; i >= 0; i--){
            total.unshift(second[i]);
        }
    } else {
        // second is the smallest
        for (let i = second.length - 1, j = first.length - 1; i >= 0; i--, j--){
            let sum = first[j] + second[i];
            total.unshift(sum % 10);
        }

        first = first.slice(0, first.length - second.length);

        for (let i = first.length - 1; i >= 0; i--){
            total.unshift(first[i]);
        }
    }

    console.log(total.join(''));
});