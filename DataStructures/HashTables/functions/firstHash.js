"a".charCodeAt(0) // 97

"d".charCodeAt(0) - 96 // 4


let total = 0

total += "hello".charCodeAt(0)-96 // 8
total += "hello".charCodeAt(1)-96 // 13
total += "hello".charCodeAt(2)-96 // 25
total += "hello".charCodeAt(3)-96 // 37
total += "hello".charCodeAt(4)-96 // 52

total // 52

13 % 3 // 1

total % 11  // 8
// Simple Hash Example
// Strings Only
function hash(key, arrayLen) {
  let total = 0
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

// issues
// 1. Only hashes strings (we wont worry about this)
// 2. Not constant time - linear in key length
// 3. Could be a little more random