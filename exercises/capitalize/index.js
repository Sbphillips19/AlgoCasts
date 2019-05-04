// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//My favorite solution
function capitalize(str) {
  return str
    .split(' ')
    .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
    .join(' ');
}

module.exports = capitalize;

// my solution
//
// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
//     .join(' ');
// }

// using slice instead
// slice should be used instead of substring
// less unexpected behavior

// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
//     .join(' ');
// }

// GRIDER SOLUTION 1
// function capitalize(str) {
//   const words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

//GRIDER SOLUTION 2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
