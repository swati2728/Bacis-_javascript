// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"
  // }
// promise.then((result)=>{
//     console.log("its result",result)
// })
// f();



// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//     //   console.log(resolve);
//       // resolve with this.num*2 after 1000ms
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   }
  
//   async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     console.log(result);
//   }
  
//   f();

// var promise = new promise((resolve,reject)=> {
//   async function relationship(){
//     var readlinesync = require("readline-sync")
//       var boyfriend = readlinesync.question("enetr a boyfriend name")
//       var girlfriend = readlinesync.question("enter a girlfriend name")
//       if (boyfriend=="yousuf"){
//         if(girlfriend=="swati"){
//           console.log(resolve)
//         }else{
//           console.log(reject)
//         }
//         }else{
//           console.log(reject)
//         }
//         var future = await new promice
//         console.log(future)
//     }
// });
// var readlinesync = require("readline-sync")
// var boyfriend = readlinesync.question("enetr a boyfriend name")
// var girlfriend = readlinesync.question("enter a girlfriend name")

// promise.then((future)=>{
//     console.log("its result",future)
// });


// async function sum(){
//   if (num1==num2){
//     console.log("same")
//   }else{
//     console.log("not same")
//   }
// }
// var readlinesync = require("readline-sync")
// var num1 = readlinesync.question("enter a number")
// var num2 = readlinesync.question("enter a number")
// sum()


// var new_list = ["pooja","swati","pooja","parveen","swati","komal","pooja","swati"]
// var empty_list=[]
// var count = 0
// for(var i=0;i<new_list.length;i++){
//   for(var j=0;j<i;j++){
//     if(new_list[i] == new_list[j]){
//       empty_list.push(new_list[i])
//       count=count+1
//     }
//   }
// }
// console.log(count)
// console.log(empty_list)

var new_list = ["pooja","swati","pooja","parveen","swati","komal","pooja","swati","swati","pooja"]
var empty_list1=[]
var count1 = 0
var empty_list2=[]
var count2 =0
var empty_list3=[]
for(var i=0;i<new_list.length;i++){
  if(new_list[i]=="pooja"){
    count1=count1+1
    empty_list1.push(new_list[i])
  }
  if(new_list[i]=="swati"){
    count2=count2+1
    empty_list2.push(new_list[i])
  }
}empty_list3.push(count2,count2)
console.log(empty_list3)
// console.log(count1,empty_list1)
// console.log(count2,empty_list2)