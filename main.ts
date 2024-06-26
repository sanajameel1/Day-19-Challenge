
// QUESTION 55

// // Starts with a list of numbers
// let numbers = [1, 2, 3, 4, 5];

// // Doubles each number
// let doubledNumbers = numbers.map(number => number * 2);

// // Shows the new list of doubled numbers
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// // This line takes each number, doubles it, and puts it in a new list.

//  QUESTION 56

// A mixed bag of items
// let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// // Picks out only the words
// let stringsArray = mixedArray.filter(item => typeof item === "string");
  

// QUESTION 57

// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
