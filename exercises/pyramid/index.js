// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// my SOLUTION
// function pyramid(n, step = 0, hashtags = 1) {
//   if (step === n) {
//     return;
//   }
//
//   let hashtagSide = n - 1 - step;
//   let hashSymbol = '#';
//   let space = ' ';
//
//   // if (step !== n) {
//   console.log(
//     space.repeat(hashtagSide) +
//       hashSymbol.repeat(hashtags) +
//       space.repeat(hashtagSide)
//   );
//   // } else {
//   // console.log(hashSymbol.repeat(hashtags));
//   // }
//
//   pyramid(n, step + 1, hashtags + 2);
// }

//ANSWER FROM COMMENTS I LIKE

// function pyramid(n) {
//     let count = 1;
//     let maxPoundCount = 2*n - 1;
//     while(count <= n){
//         let sidesCount = n - count;
//         let poundCount = maxPoundCount - (2*sidesCount);
//         let side = ' '.repeat(sidesCount);
//         let pounds = '#'.repeat(poundCount);
//         console.log(`${side}${pounds}${side}`);
//         count++;
//     }
// }

// GRIDER SOLUTIION 1
// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     const midpoint = Math.floor((2 * n - 1) / 2);
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//   }
// }
