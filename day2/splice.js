let numbers = [4, 2, 1, 6, 5, 3];

// push -> pushes an element to the end of the array
numbers.push(7);

// unshift -> adds an element to the beginning of the array
numbers.unshift(0);

// pop -> removes the last element from the array
numbers.pop();

// shift -> removes the first element from the array
numbers.shift();

// splice -> adds/removes elements from the array at any position
// index: 2
// numbers.splice(2, 3, 7);

numbers.splice(4, 0, 7);

console.log(numbers);