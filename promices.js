// When a promise is pending it can change to fulfilled or rejected state. 
// Once a promise is fulfilled or rejected it is settled and cannot change its state again.


// var promise = new Promise(function(resolve, reject){
//     var readlinesync = require("readline-sync");
//     var num = readlinesync.question("enter a number")
//     if(num%3==0){
//         resolve("its divisible of three")
//         console.log("yes!!!")
//     }else{
//         reject("not divisible")
//     }
// });




// var p = new Promise((resolve,reject)=>{
//     let a = 1 + 1
//     if(a==2){
        // resolve("success")
//     }else{
//         reject("failed")
//     }
// })
// p.then((message)=>{
//     console.log("this is in then method" +" " + message)
// }).catch((message)=>{
//     console.log("this is catch method" + " " + message)
// })

// var readlinesync = require("readline-sync");
// var num = readlinesync.question("enter any number")
// var f = new Promise((resolve,reject)=>{
//     if (num%2==0){
//         resolve("Even Number")
//     }else{
//         reject("Odd Number")
//     }
// })
// var readlinesync = require("readline-sync");
// var num = readlinesync.question("enter any number")
// f.then((num)=>{
//     console.log("It is a" + " " + num)
// }).catch((num)=>{
//     console.log("It is a" + " " + num)
// })




// var promise = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforgeeks"
//     if(x === y) { 
//       resolve(); 
//     } else { 
//       reject(); 
//     }
// }); 
// promise.then(function(){ 
//     console.log('Success, You are a GEEK');
// }).catch(function () { 
//     console.log('Some error has occurred'); 
// }); 


// var calculator = new Promise((resolve,reject)=>{
//     var readlineSync = require("readline-sync");
//     var first_Number = readlineSync.question("enter you first number :-")
//     var second_number = readlineSync.question("enter your second number:-")
//     var symbol = readlineSync.question("enter a symbol :-")
//     if(symbol =="+"){
//         result = first_Number+second_number
//         resolve(result)

//     }else if (symbol == "-"){
//         result = first_Number-second_number
//         resolve(result)

//     }else if (symbol == "*"){
//         result = first_Number*second_number
//         resolve(result)

//     }else if(symbol == "/"){
//         result = first_Number/second_number
//         resolve(result)

//     }else{
//         reject("error somewhere")
//     }     
// })
// calculator.then((result)=>{
//     console.log("its result is" + " " + result)
// }).catch((result)=>{
//     console.log("Some error has occurred" +" " + result)
// });



// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//     });