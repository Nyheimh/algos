// In almost all program languages, there is a built in data structure that managers what happens when functions are invoked.

// The Call Stack
// stack data structure, when a function is invoked it is placed (pusahed) on top of the call stack
// When JS sees the return keyword or when the function ends, the compiler will remove (pop)


function takeShower() {
  return "Showering!"
}
console.log(takeShower ,"takeShower")

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}
console.log(eatBreakfast, "eatBreakfast")

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"]
  return items[Math.floor(Math.random() * items.length)];
}
console.log(cookFood)

function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("Okay ready to go to work!")
}

wakeUp()