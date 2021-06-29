// Pure Recursion

//Function itself is self contained
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them

// Strings are immutable so you will need to use methofs like slice, substr, or substring to make copies of strings

// Toi make copies of objects use Object.assign, or the spread operator

function collectOddValues(arr) {
  let newArr = []; //defined each time through, will be reset to empty

  if (arr.length === 0) { // is the array empty
    return newArr; 
  }

  if (arr[0] % 2 !== 0) { //if first number in array odd
    newArr.push(arr[0]); // if it is push to new array
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1))); //assign new array to be concatted value of newArr
  //concat all arrays at end
  return newArr
}

collectOddValues([1,2,3,4,5])