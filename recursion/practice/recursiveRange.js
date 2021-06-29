// Write a function called recursiveRange which accepts 
// a number and adds up all the numbers
// from 0 to the number passed to the function

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1)
// 6 + 5 = 11
// 4 + 3 = 7
// 2 + 1 = 3
// _________
  // 21
}

recursiveRange(6)
//output 21