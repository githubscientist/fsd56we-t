const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (line) => {
    userInput.push(line);
});

let findCount = (number, numbers) => {
  let count = 0;
  numbers.forEach(num => {
    if (number == num) count++;
  });
  return count;
}

let removeElement = (number, numbers, count) => {
  while (count > 0) {
    let index = numbers.indexOf(number);
    numbers.splice(index, 1);
    count--;
  }
}

rl.on('close', () => {
  let numbers = userInput[0].split(' ').map(number => parseInt(number));

  // remove the duplicates from the numbers
  // Method: 1
  // let uniqueElements = [...new Set(numbers)];
  // console.log(uniqueElements);

  // Method: 2
  // let uniqueElements = [];

  // for (let number of numbers) {
  //   if (!uniqueElements.includes(number)) {
  //     uniqueElements.push(number);
  //   }
  // }

  // console.log(uniqueElements);

  // Method: 3
  for (let number of numbers) {
    // find the count of the number in the numbers array
    let count = findCount(number, numbers);

    removeElement(number, numbers, count - 1);
  }

  console.log(numbers);
});