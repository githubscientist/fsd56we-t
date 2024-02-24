// import readline library
const readline = require('readline');

// create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask a question and get the input from the user
rl.question('enter a number: ', (number) => {
    console.log(number**2);

    // close the readline interface
    rl.close();
});