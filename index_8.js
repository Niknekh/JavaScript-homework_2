function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (const items of array) {
    if (Number.isFinite(items) === true) {
      total += items;
    } else {
      return 0;
    }
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
