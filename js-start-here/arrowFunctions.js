// ES5 Function declarations
// function wishes (name, occasion) {
// return "Congratulations " + name + " on your " + occasion+"!"
// }

// ES6 Arrow Functions
// const wishes = (name,occasion) => {
//   return "Congratulations " + name + " on your " + occasion+"!"
// }

const wishes = (name, occasion) =>
  "Congratulations " + name + " on your " + occasion + "!";

// Variations receive only 1 argument -> remove ()

// in this example you can omit {return} and write only the statement

console.log(wishes("Salika", "graduation"));
console.log(wishes("Shweta", "first job"));

// Advantage of arrow functions - 'this' keyword
// 'this' will always preserve it's context inside an arrow function

// Assignment -> write an arrow function of your choice
