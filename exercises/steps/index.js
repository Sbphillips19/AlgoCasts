// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//GRIDER SOLUTION 2 Recursion
// first time steps(3) so it doesn't return right away
// since default row to 0
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    // increment row by one since
    // finished last step
    // want empty stair again so rely
    // on original function/ default value
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  return steps(n, row, stair);
}

module.exports = steps;

// my solution 1 and my favorite solution
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let hashtag = '#';
//     let space = ' ';
//     let step = hashtag.repeat(i) + space.repeat(n - i);
//     console.log(step);
//   }
// }

// GRIDER solution 1

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
