// setTimeout(
//     () => {
//         console.log('Hello from the future!')
//     },
//     5000
// )

let timer = 10;

let timerInterval = setInterval(
    () => {
        console.log(timer--);
    },
    1000
)

setTimeout(
    () => {
        clearInterval(timerInterval);
        console.log('Happy New Year!')
    }, 
    10000
)