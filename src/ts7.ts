//what are Generics?
//Generic allow us to create reusable code that works with
// different data type without losing type safety

//why Do we need Generics?

//function getNumber(value: number): number {
// return value;
//}

// It works only with number
// console.log(getNumber(10));

//But what if we want to pass a string
// console.log(getNumber(10));

// we could create another function:

// function getString(value:string): string{
//     return value;
// }

// This creates duplicate code. Generics solve this problem.
//Basic Generic Syntax
//syntax :

// function functionName<T>(value:T): T {
//     return value;
// }

//<T> is a type parameter used to represent type

//Generic Function

// function identify<T>(value:T):T{
//     return value;
// }

//Now the same function can work with different types.


//number
// let result1= identify<number>(100);
// console.log(result1);

//string

// let result2=identify<string>("hello");
// console.log(result2);

//one function works with multiple types

// Understanding <T>
// function identity<T>(value: T): T
// <T> → creating a type parameter
// value: T → parameter can be any type
// : T → return value will be the same type

// 6. Generic type Interface
//instead of :
//let result=identity<number>(100)

// we can write:
// let result= identity(100);

//TypeScript automatically understand : T = number

// let name=identity("diya")
// let status=identity(true)

// this is called type interface

//usually prefer:
//identity(100)

//instead of :
//identity <number>(100);

//when typeScript can infer the type correctly.

//7.Generic Function with arrays
//Generic are very useful with arrays.

//Entire array
// function getArray<T>(items: T[]): T[]{
//     return items;
// }

// let Arr=getArray([10,20,30]);
// console.log(Arr);

// function getFirst<T>(items: T[]): T | undefined{
//     return items[0];
// }

//number array
// let firstNumber=getFirst([10,20,30]);
// console.log(firstNumber);

//String array

// let firstName=getFirst(["jhon","david","alex"]);
// console.log(firstName);

//8.why not use any

// Example:
// function getFirst(items:any[]): any{
//     return items[0]
// }

//this work, but it loses type safetly.
//for Example:
// let result = getFisrt([10,20,30]);

//becouse the  return type is any , typeScript dosn't know the result is a number

//with generic:
// function getFirst<T>(items: T[]): T {
//     return items[0];
// }

// TypeScript knows:
// number[] → number
// string[] → string
// boolean[] → boolean

// Important difference

// any	
// Loses type safety	
// Flexible	
// Type information is lost	
// Less safe	
// Avoid when possible	

// Generics
// Maintains type safety
// Flexible
// Type information is preserved
// More safe
// Recommended for reusable typed code

//9 Generic function with multiple parameters
// we can use multiple type parameters.
// function pair<T,U>(first: T,second : U){
//     return {first,second}
// }

//usage 
// let result = pair("age",25)
// console.log(result);

//Another example :
// let result2=pair(10,true);
// console.log(result2);

//10.Generic arrow function

//const identity =<T>(value:T): T =>{
// return value;
//}

//Usage:
// console.log(identity(100));
// console.log(identity("hello"));
// console.log(identity(true));

// 11. Generic with Objects
//suppose we have
// function printdata<T>(data:T):T{
//     return data;
// }

//we can pass an object:

// const student={
//     name:"rahul",
//     age:22
// }

// let res=printData(student)

// console.log(res);
// console.log(res.age);

//12.generic interface
//Generic can also use with interface
//Example:
interface Box<T> {
    value:T;
}
//now we can create different type of boxes
//number box

let numberBox: Box<number>={
    value:100
};

console.log(numberBox);

//string Box

let stingBox:Box<string> ={
    value:"hello"
}

console.log(stingBox);

//the same interface can work with different  types

//13. Generic type alias
//Generic also work with type
type ResponseData<T> ={
    data:T;
    status:number;
}

//now
let userResponse: ResponseData<string>={
    data:"user data",
    status:200
}

let numberResponse: ResponseData<number>={
    data:100,
    status:200
}
console.log(numberResponse);

//14. Generic with Real objects
//Consider as a api  response.
// usually an api response may look like
// {
//     data:...,
//     status:200

// }

// but data can different type
//for example:

interface ApiResponse<T> {
    data:T;
    status:number;
}

//user response

interface User{
    id:number;
    name:string;
}

const response:ApiResponse<User>={
    data:{
        id:1,
        name:"rahul"
    },
    status:200
};

//now 
console.log(response.data.name);

//TypeScript know that:
//response.data is a User

//20.Generic vs Union
//union
// function print(value:string| number){
//     console.log(value);
// }

// it means:
// the value can be either String or number

//Generic 

function idrntity<T>(value: T): T {
    return value;
}

// it means: whenever type come in ,preserve that same type.

//for example

let result = identity(100)

let result1=idrntity("hello")

// Key difference
// Union	
// Allows predefined types	
// string | number	
// Good for alternatives

// Generic
// Works with many types
// T
// Good for reusable code

// 23. Important Generic Syntax
// Generic Function
function test<T>(value: T): T {
    return value;
}

// Multiple Types
function test<T, U>(a: T, b: U) {
    return { a, b };
}

// Generic Interface
interface Box<T> {
    value: T;
}

// Generic Type
type Result<T> = {
    data: T;
};


//24.Example -Reusable Api Response
interface ApiResponse<T>{
    data: T;
    satus:number;
    message:string
}

//User
interface User{
    id:number;
    name:string
}

//product:

interface Product{
    id:number;
    name:string;
    price:number;
}

//user response

const userResponse:ApiResponse<User> ={
    data:{
        id:1,
        name:"rahul"
    },
    satus:200,
    message:"success"
};

//product response

const productResponse:ApiResponse<Product> ={
    data:{
        id:1,
        name:"rahul",
        price:200
    },
    satus:200,
    message:"success"
};














