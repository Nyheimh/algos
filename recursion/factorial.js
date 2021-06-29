function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--){
    total *= i
  }
  return total;
}

// factorial(4)

//recursive factorial
function factorial(num) {
  if (num === 1) return 1 //to ensure nothing goes after 1. no negatives
  //base case ^
  return num * factorial(num-1)
}

factorial(5)


function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1)
}

power(2, 2)

function factorial(x){
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial(x-1);
}