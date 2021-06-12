//Rest Parameter

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

//So use this in a function when you don't know the number of arguments that function will be called with

//  rest is used to merge function arguments into an array

// Example 1
const displayNumbers = (...args) => {
  return args;
};

console.log(displayNumbers(1, 2, 3, 4, 5));

//Example 2
const showParams = (firstParam, secondParam, ...allOtherParams) => {
  console.log(firstParam);
  console.log(secondParam);
  console.log(allOtherParams);
};

showParams("Here is 1st", "Here is 2nd", "3rd", "4th", "5th");
