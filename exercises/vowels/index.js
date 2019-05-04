// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // g makes sure we don't stop at first match we find
  // i case insentive
  const matches = str.match(/[aeiou]/gi);
  // if no matches then it returns null
  // need to check for this/ if it is null then it is false
  // want to return 0 instead
  return matches ? matches.length : 0;
}

module.exports = vowels;

// Solution 1

// function vowels(str) {
//   let count = 0;

// can use array or string
// probably easier for developers to see array since string they may wonder
// if in specific order

// const checker = ['a', 'e', 'i', 'o', 'u'];
//   const checker = 'aeiou';

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
