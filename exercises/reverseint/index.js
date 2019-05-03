// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign(number)
// if number is positive returns 1
// otherwise returns -1 if negative

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  // if (n < 0) {
  //   return parseInt(reversed) * -1;
  // }
  // return parseInt(reversed);
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// MY SOLUTION
// function reverseInt(n) {
//   let arrayNum = n.toString().split('');
//   if (arrayNum[0] === '-') {
//     newArrayNum = arrayNum.slice(1, arrayNum.length);
//     return parseInt('-' + newArrayNum.reverse().join(''));
//   } else {
//     return parseInt(arrayNum.reverse().join(''));
//   }
// }
