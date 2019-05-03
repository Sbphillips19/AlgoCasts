// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Step 1. Use the split() method to return a new array
  // Step 2. Use the reverse() method to reverse the new created array
  // this method only applies to arrays
  // Step 3. Use the join() method to join all elements of the array into a string

  return str
    .split('')
    .reverse()
    .join('');
}

// other possible answers

// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   // reduce takes an arrow function and starting initial value
//   // function runs one time for ever item in the array
//
//   return str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
// }

module.exports = reverse;
