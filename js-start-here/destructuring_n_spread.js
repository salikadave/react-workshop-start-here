//*****Array destructuring*****

// With the spread operator (...<name>) we can store all values of an array and avoid mentioning all of it again

//Example 1
const languages = ["C", "Python", "JS"];

const updatedLanguages = [...languages, "Ruby", "Java"];

console.log(updatedLanguages);

//Example 2
const [color1, color2, ...rest] = ["pink", "green", "blue", "yellow", "orange"];

console.log(color1);
console.log(color2);
console.log(...rest);

//Example 3
let arr1 = ["a", "b"];
let arr2 = ["x", "y"];

arr1 = [...arr1, arr2];

console.log(arr1);

// *****Object desturing******

//Exxample 1
const person = {
  name: "Joe",
  age: 25,
};

const updatedPerson = { ...person, gender: "Male" };

//Example 2
const user = {
  userId: "shweta",
  password: "123456",
};

const { id, pwd } = user;

console.log(id);
console.log(pwd);
