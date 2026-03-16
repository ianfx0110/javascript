// Objects with Properties in JavaScript

const student = {
  name: "John",
  age: 20,
  grade: "A"
};

// Accessing Object Properties
console.log(student.name);

// Modifying Object Properties
student.age = 21;
console.log(student.age);

// Adding New Properties to an Object
student.major = "Computer Science";
console.log(student.major);

// Deleting Properties from an Object
delete student.grade;
console.log(student.grade); // undefined

// Methods in Objects
const person = {
  firstName: "Jane",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.getFullName()); // Jane Doe

// Functions as Object Properties
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2

// Nested Objects
const company = {
  name: "Tech Solutions",
    employees: {
      john: {
        id: 1,
        position: "Developer"
      },
      jane: {
        id: 2,
        position: "Designer"
      }
    }
  };
console.log(company.employees.john.position); // Developer


let person1 = {
  name: "Alice",
  age: 30,
  city: "New York"
};

let person2 = {JSON.parse(JSON.stringify(person1))};
console.log(person2); // {"name":"Alice","age":30,"city":"New York"}

// Write a function that takes in two inventories, combines them, and 