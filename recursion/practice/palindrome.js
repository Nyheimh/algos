//Write a recursive function called isPalindrome which returns true if the string passed to it is
// a palindrome (reads the same forward and backward). Otherwise it returns false

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
isPalindrome('tacocat') // true

// Breakdown
// add return (because something has to be returned)
// if the length of the string is 1 return true
// if the length of the string is 2, return string indice 1 = to string indice 2
// if the indice of string 0 is equal to -1 string length then return function
// slice of string at 1, -1