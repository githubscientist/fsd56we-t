let Array = require('./Array');

let numbers = new Array();

numbers.push(4);
numbers.push(5);
numbers.push(6);

numbers.whileEach(number => {
    console.log(number);
});

// console.log(numbers.toArray());