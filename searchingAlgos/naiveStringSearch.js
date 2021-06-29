// Naive String Search

// - Suppose you want to count the number of times a smaller string appears in a longer string
// - A straightforward approach involves checking pairs of characters indiviually

// Pseudcomoe

// - define a function
// - loop over the longer string
// - loop over the shorter string
// - if the characters dont match, break out of the inner loop
// - if you complete the inner loop and find a match, increment the count of matches
// - return the count


// function naiveSearch(long, short) {
//   let count = 0
//   for (var i = 0; i < long.length; i++){
//     for (let j = 0; j < short.length; j++){
//       if (short[j] !== long[i + j]) {
//         break;
//       }
//       if (j === short.length - 1) {
//         console.log("Found One")
//         count ++
//       }
//     }
//   }
//   return count
// }
// naiveSearch("lorie loled", "lol")

// i: 0
// j: 1


function naiveSearch(long, short) {
  let count = 0
  for (var i = 0; i < long.length; i++){
    for (let j = 0; j < short.length; j++){
      if (short[j] !== long[i + j])  break;
      if (j === short.length - 1) count++;
    }
  }
  return count
}
naiveSearch("lorie loled", "lol")