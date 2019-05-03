// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return reversed === str;
}

// other answers

// isssue with this is it compares multiple times
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// function palindrome(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

module.exports = palindrome;
