// let numbers = [1, 2, 3, 4, 5];

// Question: find the array of squares of numbers

// without map method

// // 1. create an empty array to store the squares of the values from numbers array <- squares
// let squares = [];

// // 2. iterate or traverse the numbers array
// for (let index = 0; index < numbers.length; index++){
//     squares.push(numbers[index]**2);
// }

// // 3. print the squares array
// console.log(squares);

// ----------------------------------------------------------------
// function squarer(value, index, array) {
//     return value ** 2;
// }

// // with map method -> non in-place method
// let squares = numbers.map(squarer);

// console.log(squares);

// ------------------------------------------------

// let squares = numbers.map(value => value ** 2);
// console.log(squares);

/*
    Question: Using map method, Given a list of values, return an array with the result for the values based on the following:

    1. If the given value is an even number, return value ** 2
    2. If the given value is a odd number, return value ** 3

    Sample Input:

    numbers = [1, 2, 3, 4, 5, 6, 7]

    Sample Output:

    [1, 4, 27, 16, 125, 36, 343]
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];

let mapper = (value) => {
    if (value % 2 == 0) {
        return value ** 2;
    } else {
        return value ** 3;
    }
}

let result = numbers.map(mapper);

console.log(result);