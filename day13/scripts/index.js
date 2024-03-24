// const loginButton = document.getElementById('loginButton');

// loginButton.addEventListener('dblclick', () => {
//     window.location.href = '/day13/pages/login.html';
// })
let ctrlPressed = false;

document.addEventListener('keydown', (event) => {
    // console.log('key presssed:', event.key);

    if (event.key === 'Control') {
        ctrlPressed = true;
    } else if (event.key === 's' && ctrlPressed) {
        event.preventDefault();
        console.log('Ctrl + S pressed');
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'Control') {
        ctrlPressed = false;
    }
});