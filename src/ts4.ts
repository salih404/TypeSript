//function, parameters , return type & arrow functions

// in Ts

// function add(a: number, b: number): number {
//     return a+b;
// }

// function greet(name: string): string{
//     return "hello"+name;
// }
// console.log(greet("miya"));

// function studentInfo(name:string,age :number): string{
//     return`${name} is ${age} year old`
// }

// console.log(studenInfo("rahul",22));


// function printMessage(message:string): void{
//     console.log(message);
// }

// printMessage("hello Type script")


// function greeting(name: string,age?: number): string{
//     if(age){
//         return `${name} is ${age}year old`
//     }
//     else{
//         return `hello$`
//     }
// }


// function greeUser(name:string="Gust"):string{
//     return `hello ${name}`
// }

// console.log(greeUser);
// console.log(greeUser("miya"));


// function greet (name?:string) :string{
// return `hello${name}`
// }

// function greet (name:string="gust") :string{
// return `hello${name}`
// }

// in js 

// const add_num =function (a,b){
//     return a+b;
// }

// arrow function 
// syntax
// const add = (a:number,b:number):number =>{
//     return a+b;
// }

// console.log(add(10,20));

// arrow functio -short Syntax
// if there is onlyone retur statement
// const add(a:number,b:number):number =>a+b;
// console.log(add(10,20));

// arrow function with string 

// const greet =(name:string):string =>{
//     return `hello${name}`
// }

// arrowfucnction with void
// const printName=(name:string):void =>{
//     console.log(name);
// }

// printName("rahul")

// practice with three important return types

// const getStudentName(name: strnig):string =>{
//     return name;
// }
// const studentMark(mark:number): boolean =>{
//     return mark 
// }
// studentMark(4)

const add =(a:number,b:number)=>{
    return a+b
}

console.log(add(2,3));

const addition = (a:number,b:number): number=>{
    return a+b
}



