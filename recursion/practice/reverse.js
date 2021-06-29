// write a recursive function called reverse which accepts a string and returns a new string in reverse

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}


// Breakdown

// if the length of the string is less or equal to 1, return the string
// return reverse of the string and slice the 1 indice and add to the string in the 0 indice