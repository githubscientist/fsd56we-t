function findPalindromes(words) {
    // returns only the words that are palindromes as an array
    let palindromes = [];

    for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            palindromes.push(word);
        }
    }
    return palindromes;
}

let words = ['god', 'madam', 'javascript', 'malayalam', '1221', '1234'];

let palindromes = findPalindromes(words);

console.log(palindromes);