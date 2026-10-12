//array tuple & Enum

// 1).Array in typescript

//js
// let num=[10,20,30,40]

//in ts
// let numbers:number[]=[10,20,30,40];

//2. string in Array
// let students:string[]=[
//     "rahul",
//     "arun",
//     "meera"
// ];

//access values using index number:

// console.log(students[0]);
// console.log(students[1]);

//3.another Way to Define Arrays:
//TypeScript provides another syntax:

// let numbers: Array<number> =[10,20,30]

//both are equal:

// 4. type safty in array

// let marks:number[]=[80,75,90];
// marks.push(95);

// marks.push("100") //raise error

//5. Array Methods

//normal Js array methods work in ts
//1.) push()
//add element

// let numbers:number[]=[10,20,30];
// numbers.push(40);
// console.log(numbers);

//2). pop()
//removes the last element.

// numbers.pop();

//3. shift()
//removes the first element
//numbers.shift();


//4.unshift();
//adds an element to the begginning

//numbers.unshift(5);

//6.for of with Arrays

// let stud:string[]=[
//     "Rahul",
//     "arun",
//     "meera"
// ];

// for (let 5 of stud){
//     console.log(s);
// }
//7.map() in Ts

// let numbers :number[] = [1,2,3,4,5];
// let modified :number[]= numbers.map(
//     ( num: number): number =>{
//         return num *2
//     }
// );
// console.log(modified);

//8.) filter() in Ts

// let numbers: number[]=[10,15,20,25,30];

// let result: number[]=numbers.filter(
//     (num:number): boolean =>{
//         return num >20
//     }
// )
// console.log(result);

//9.readonly Arrays

// const num : readonly number[] = [10,20,30];
// num.push(40) //error

// let data : (string | number)[]=[
//     "rahul",
//     25,
//     "python",
//     100
// ];

// data.push(true)

// 11 . Tuples

//A tuple id different from normal array
//A tuple allows us to specify: the exact number and order of element.

//example :

// let student :[string,number]=[
//     "rahul",
//     22
// ];
// console.log(student[0]);
// console.log(student[1]);

//.12 tuple example

// let employee:[string,number,string]=[
//     "miya",
//     25,
//     "developer"
// ];

//13. array VS tuple

//let number:number [] = [10,20,30,40];

//number of element can vary.

//tuple
// let student:[string,number]=[
//     "rahul",
//     22
// ];

// 14). optional tuple elements
// A tuple can have an optional element.

// let s:[string,number,string?];

// s=["rahul",22];
// s=["rahul",22,"python"];

//15). named tuples

// let student_details:[
//     name:string,
//     age:number,
//     course:string
// ]=[
//     "rahul",
//     22,
//     "python"
// ];
// enum Direction {
//     North,
//     South,
//     East,
//     West
// }
// console.log(Direction.North);
// console.log(Direction.South);


// enum Status{
//     pending,
//     Approved,
//     Rejected
// }

// let currentStatus:Status = status.Pending
// console.log(currentStatus);\


// enum Status{
//     Pending=1,
//     Approved=2,
//     Rejected=3

// }
// console.log(Status.Approved);



// enum Role{
//     Admin ="ADMIN",
//     User="USER",
//     developer="DEVELOPER"
// }
// let userRole:Role=Role.developer;
// console.log(userRole);

enum Role{
Admin ="ADMIN",
 User="USER",
 Tester="TESTER"
}

function checkRole(role:Role):void{
    console.log(`current role:${role}`);
}
checkRole(Role.Tester);




















