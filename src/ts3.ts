// TypeScript — Day 3
// Functions, Parameters, Return Types & Arrow Functions
// 1. Learning objectives

// By the end of Day 3, students should understand:

// TypeScript functions
// Parameter types
// Return types
// Optional parameters
// Default parameters
// Multiple parameters
// void
// Arrow functions in TypeScript
// Function expressions
// Basic function type definitions
// 2. Quick Revision

// In JavaScript:

// function add(a, b) {
//     return a + b;
// }

// The problem is that JavaScript does not tell us what type a and b should be.

// In TypeScript:

// function add(a: number, b: number): number {
//     return a + b;
// }

// Here:

// a: number
// b: number

// means the parameters must be numbers.

// And:

// ): number

// means the function must return a number.

// 3. Basic Function Syntax
// function functionName(parameter: datatype): returnType {
//     // code
// }

// Example:

// function greet(name: string): string {
//     return "Hello " + name;
// }

// console.log(greet("Adithya"));
// Line-by-line
// function greet

// Creates a function called greet.

// name: string

// name must contain a string.

// ): string

// The function returns a string.

// return "Hello " + name;

// Returns the greeting.

// 4. Function Without Parameters
// function welcome(): string {
//     return "Welcome to TypeScript";
// }

// console.log(welcome());

// There are no parameters, so we use:

// ()

// The return type is:

// : string
// 5. Function With Multiple Parameters
// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(10, 20));

// Both parameters must be numbers.

// Correct:

// add(10, 20);

// Incorrect:

// add("10", 20);

// TypeScript will show an error because "10" is a string.

// 6. Different Parameter Types
// function studentInfo(name: string, age: number): string {
//     return `${name} is ${age} years old`;
// }

// console.log(studentInfo("Rahul", 22));

// Here:

// name → string
// age → number
// return → string
// 7. Function Returning Boolean
// function isAdult(age: number): boolean {
//     return age >= 18;
// }

// console.log(isAdult(20));

// Output:

// true

// The function returns either:

// true

// or

// false

// Therefore:

// : boolean
// 8. void Return Type

// Sometimes a function doesn't return anything.

// Example:

// function printMessage(message: string): void {
//     console.log(message);
// }

// printMessage("Hello TypeScript");

// Here the function performs an action but doesn't return a value.

// So we use:

// void
// Difference
// function add(a: number, b: number): number {
//     return a + b;
// }

// Returns a value.

// But:

// function printMessage(message: string): void {
//     console.log(message);
// }

// Doesn't return a value.

// 9. Optional Parameters

// Sometimes a parameter is optional.

// Use ?.

// function greet(name: string, age?: number): string {
//     if (age) {
//         return `${name} is ${age} years old`;
//     }

//     return `Hello ${name}`;
// }

// console.log(greet("Rahul"));
// console.log(greet("Rahul", 22));

// Here:

// age?: number

// means:

// age may or may not be provided.

// Both are valid:

// greet("Rahul");
// greet("Rahul", 22);
// 10. Default Parameters

// We can provide a default value.

// function greet(name: string = "Guest"): string {
//     return `Hello ${name}`;
// }

// console.log(greet());
// console.log(greet("Adithya"));

// Output:

// Hello Guest
// Hello Adithya

// If no value is provided, "Guest" is used.

// 11. Optional vs Default Parameter
// Optional
// function greet(name?: string): string {
//     return `Hello ${name}`;
// }

// The value can be missing.

// Default
// function greet(name: string = "Guest"): string {
//     return `Hello ${name}`;
// }

// If the value is missing, "Guest" is automatically used.

// 12. Function Expression

// A function can also be stored inside a variable.

// JavaScript:

// const add = function(a, b) {
//     return a + b;
// };

// TypeScript:

// const add = function(a: number, b: number): number {
//     return a + b;
// };

// console.log(add(10, 20));

// Notice:

// a: number
// b: number

// and:

// ): number
// 13. Arrow Function

// This is especially important because you'll use arrow functions heavily in React.

// Basic syntax:

// const add = (a: number, b: number): number => {
//     return a + b;
// };

// console.log(add(10, 20));
// Understand the structure
// const add

// Store the function in a constant.

// (a: number, b: number)

// Two number parameters.

// : number

// Return type is number.

// =>

// Arrow function operator.

// 14. Arrow Function — Short Syntax

// If there is only one return statement:

// const add = (a: number, b: number): number => a + b;

// console.log(add(10, 20));

// This is called an implicit return.

// Instead of:

// const add = (a: number, b: number): number => {
//     return a + b;
// };

// we can write:

// const add = (a: number, b: number): number => a + b;
// 15. Arrow Function With String
// const greet = (name: string): string => {
//     return `Hello ${name}`;
// };

// console.log(greet("Adithya"));
// 16. Arrow Function With Boolean
// const checkAge = (age: number): boolean => {
//     return age >= 18;
// };

// console.log(checkAge(21));
// 17. Arrow Function With void
// const printName = (name: string): void => {
//     console.log(name);
// };

// printName("Rahul");
// 18. Function Type

// TypeScript also allows us to describe the type of a function.

// let operation: (a: number, b: number) => number;

// This means:

// operation must be a function that accepts two numbers and returns a number.

// Now:

// operation = (a: number, b: number): number => {
//     return a + b;
// };

// console.log(operation(10, 20));
// 19. Another Example
// let calculate: (x: number, y: number) => number;

// calculate = (x, y) => {
//     return x * y;
// };

// console.log(calculate(5, 4));

// TypeScript already knows that:

// x → number
// y → number
// return → number

// because of:

// let calculate: (x: number, y: number) => number;
// 20. Real-world Example — Student
// const getStudentName = (name: string): string => {
//     return name;
// };

// const getStudentMark = (mark: number): number => {
//     return mark;
// };

// const isPassed = (mark: number): boolean => {
//     return mark >= 40;
// };

// console.log(getStudentName("Rahul"));
// console.log(getStudentMark(75));
// console.log(isPassed(75));

// This gives students practice with three important return types:

// string
// number
// boolean
// 21. Important TypeScript Rule

// TypeScript can often infer the return type.

// For example:

// const add = (a: number, b: number) => {
//     return a + b;
// };

// TypeScript understands:

// a → number
// b → number
// return → number

// So we could write:

// const add = (a: number, b: number): number => {
//     return a + b;
// };

// or:

// const add = (a: number, b: number) => {
//     return a + b;
// };

// Both work.

// For beginners, I recommend explicitly writing the return type while learning because it makes the function structure easier to understand.

// 22. Practice Examples
// Example 1

// Create a function that accepts two numbers and returns their difference.

// const subtract = (a: number, b: number): number => {
//     return a - b;
// };

// console.log(subtract(20, 5));
// Example 2

// Create a function that accepts a person's name and returns a greeting.

// const welcome = (name: string): string => {
//     return `Welcome ${name}`;
// };

// console.log(welcome("Anu"));
// Example 3

// Check whether a number is even.

// const isEven = (num: number): boolean => {
//     return num % 2 === 0;
// };

// console.log(isEven(10));
// 23. Day 3 Workout

// Give students these exercises without immediately showing the answers.

// Basic
// Create a function that accepts two numbers and returns their sum.
// Create a function that returns the square of a number.
// Create a function that accepts a name and returns "Hello <name>".
// Create a function that checks whether a number is positive.
// Create a function that checks whether a person is eligible to vote.
// Create a function that returns the largest of two numbers.
// Create a function that converts Celsius to Fahrenheit.
// Create a function that calculates the area of a rectangle.
// Create a function that calculates the perimeter of a rectangle.
// Create a function that accepts a string and returns its length.
// Optional/default parameters
// Create a greet() function with an optional name.
// Create a function with a default country value of "India".
// Create a function that accepts name and optional age.
// Create a function that accepts a default discount of 10.
// Create a function that calculates price after discount.
// Arrow functions
// Create an arrow function to add two numbers.
// Create an arrow function to multiply two numbers.
// Create an arrow function to check whether a number is odd.
// Create an arrow function to convert a string to uppercase.
// Create an arrow function to check whether a student passed.
// ⭐ Important for React

// Tell students this today:

// const greet = (name: string): string => {
//     return `Hello ${name}`;
// };

// In React, you will frequently write things like:

// const App = () => {
//     return <h1>Hello</h1>;
// };

// So Day 3's arrow functions are an important foundation for React + TypeScript.

// Day 3 summary
// Function
//    ↓
// Parameters
//    ↓
// Parameter Types
//    ↓
// Return Types
//    ↓
// void
//    ↓
// Optional Parameters
//    ↓
// Default Parameters
//    ↓
// Function Expression
//    ↓
// Arrow Function
//    ↓
// Function Type