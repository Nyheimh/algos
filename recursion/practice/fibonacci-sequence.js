// Write a recursive function called fib which accepts a number and returns
// the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8
// which starts with 1 and 1, and where every number thereafter is equal to the sum of previous two numbers.

function fib(n) {
  if (n <= 2) return 1;
  // if (4 <= 2) return 1 // false
  return fib(n - 1) + fib(n - 2)
  // fib(4-1)=3 + fib(4-2) = 2
}

fib(6)

//Note:

//The Fibonacci sequence is an already defined sequence that I am attempting to figure out what number is in the respective position. 