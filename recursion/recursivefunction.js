// Recursion

//Two essential parts

// Base Case
// The condition when the recursion ends.

//Different Input

// function countDown(num) {
//   if (num <= 0) {
//     console.log("All Done!")
//     return;
//   }
//   console.log(num)
//   num--;
//   countDown(num)
// }

// function countDown(num) {
//   for (var i = num; i > 0; i--){
//     console.log(i)
//   }
//   console.log("All Done!")
// }
// countDown(5)


function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num-1)
}

sumRange(3)