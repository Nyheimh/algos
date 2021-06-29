// function func(x, y) {
//   let ans = x * y;
//   return ans * ans - y;
// }
// // console.log(func(-1,1))


class Multiplier {
  constructor() {
    this.count = 1;
  }

  increment() {
    this.count = this.count + 1;
  }

  apply(x) {
    return this.count * x;
  }
}
let multiplier = new Multiplier();
// console.log(multiplier.apply(5));
multiplier.increment();
multiplier.increment();

// console.log(multiplier.apply(5));


// let x = 2;
// let y = 3;
// if (x < y) {
//   x = x + 1;
// } else {
//   y = y + 1;
// }
// if (x < y) {
//   x = x + 1;
// } else {
//   y = y + 1;
// }
// // console.log(x, "x");
// // console.log(y, "y");



// function func(x, y) {
//   let ans = 0;
//   if (x > y) {
//     ans = ans + x;
//   } else if (x < y) {
//     ans = ans + y;
//   } 
//   if (ans < 0) {
//     ans = ans + ans;
//   } else {
//     ans = ans - ans;
//   }
//   return ans;
// }

// // console.log(func(-1,-10) ,"new")


// let i = 0;
// while (i <= 10) {
//   // console.log(i);
//   i = i + 1;
// }

// for (let i = 15; i > 0; i-=5) {
//   // console.log(i);
// }


// function func(x) {
//   if (x <= 0) {
//     return x;
//   }
//   return func(x - 5);
// }

// console.log(func(3) ,"new")



// function intersection(A, B) {
//   let intersection = [];
//   for (let a of A) {
//     if (B.includes(a)) {
//       intersection.push(a);
//     }
//   }
//   return intersection;
// }


function difference(A, B) {
  return [...A, ...B].filter(num => !(A.includes(num) && B.includes(num)))
};
console.log(intersection([1,2,3,4],[2,4,6,8], [9,6,2,4]))



function union(A, B) {
  return [...new Set([...A,...B])]
}

function intersection(A, B, C) {
  return [...A].filter(num => (A.includes(num) && B.includes(num) && C.includes(num)))
}