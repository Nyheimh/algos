// The Syntax

class Student {
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 4)

// The method to create new objects must be called constructor.

// The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!
