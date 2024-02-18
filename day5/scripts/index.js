// Array sort method

let numbers = [5, 3, 1, 4, 2, 7, 6, 11, 10, 22, 34];

// function compareFn(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

function compareFn(a, b) {
    if (a > b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

numbers.sort(compareFn);

console.log(numbers);