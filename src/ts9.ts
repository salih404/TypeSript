//what is dom
//Dom stands for Document object model
//it allows javascript or typrscript to access and modify HTML element


//what is a dom event?
//An event is an action that happend on a webpage

//button clicked event
//Goal : when a user click a button, display message


// const username=document.getElementById("username") as HTMLInputElement;
// const button=document.getElementById("showButton") 
// const result=document.getElementById("result") 

// button?.addEventListener("click", ()=>{
//     const name=username.value;

//     if(result){
//         result.textContent="welcome"+ name;
//     }

// })

// HTML Element | Typescript Type|

//<input> |  HTMLInputElement
//<button> | HTMLButtonElement
//<form> | HTMLformElement
//<textarea> | HTMLTextAreaElement
//<select> | HTMLSelectElement
//<img> | HTMLImageElement
//<div> | HTMLDivElement
//<p> | HTMLParagraphElement

// using promis

// with number

// let data: Promise<number>=new Promise((resolve)=>{
//     resolve(100)
// });

// data.then((res)=>{
//     console.log(res);
// })

// with string

// let n_data: Promise<string>=new Promise((resolve)=>{
//     resolve("data loaded")
// });

// n_data.then((res)=>{
//     console.log(res);
// })

// function myPromis(): Promise<string>{
//     return new Promise<string>((resolve,reject)=>{
//         const success=true
//         if(success){
//             resolve("Operation success")
//         }
//         else{
//             reject("operation fail")
//         }
//     })
// }
// myPromis().then((message)=>{
//     console.log(message);
// })
// .catch((err)=>{
//     console.log(err);
// })

//deley

// function getStudent():Promise<string>{
//     return new Promise<string>((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("student data loaded")
//         },2000)

//     })
// }
// console.log("loading");

// getStudent().then((message)=>{
//     console.log(message);
// });


//Async and await in typescript

// function getStudent():Promise<string>{
//     return new Promise<string>((resolve)=>{
//         setTimeout(()=>{
//             resolve("anjali")
//         },2000)
//     })
// }

// async function displayStudent():Promise<void>{
//     console.log("Loading data");
//     const name=await getStudent()
//     console.log("student name ",+ name);
// }
// displayStudent()