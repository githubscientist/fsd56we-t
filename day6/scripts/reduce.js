// let numbers = [1, 2, 3, 4, 5];

// let sumReducer = (previousValue, currentValue) => {
//     return previousValue + currentValue;  
// }

// let sum = numbers.reduce(sumReducer);

// console.log(sum);

// let numbers = [45, 23, 12, 89, 73, 20];

// let sumReducer = (previousValue, currentValue) => {
//     // console.log(previousValue, currentValue);
//     return previousValue + currentValue;  
// }

// let sum = numbers.reduce(sumReducer, 10);

// console.log(sum);

/*
    Question: Write a reduce function that finds the maximum value in an array.

    sample input: let numbers = [1, 2, 3, 4, 5];

    sample output: 5
*/

// let numbers = [45, 23, 12, 89, 73, 20];

// let maxReducer = (previousValue, currentValue) => {
//     if (previousValue > currentValue) {
//         return previousValue;
//     } else {
//         return currentValue;
//     }
// }

// let maxReducer = (previousValue, currentValue) => {
//     return previousValue > currentValue ? previousValue : currentValue;
// }

// let maximumValue = numbers.reduce(maxReducer);

// console.log(maximumValue);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenFilter = (value) => {
    return value % 2 == 0;
}

let evenNumbers = numbers.filter(evenFilter);

let multiplyMapper = (value) => {
    return value * 2;
}

let multiplyBy2 = evenNumbers.map(multiplyMapper);

let multiples = (previousValue, currentValue) => {
    return previousValue * currentValue;
}

let result = multiplyBy2.reduce(multiples);

console.log(result);

// console.log(numbers.filter(number => number % 2 == 0).map(number => number * 2).reduce((p, c) => p*c));