// var readlinesync = require("readline-sync")
// var number = readlinesync.question("enter a number")
// var num = ()=>{
//     if (number%2==0){
//         console.log("its even number")
//     }else{
//         console.log("not even number")
//     }
// }
// num(number)



// var readlinesync=require("readline-sync")
// var first_number = readlinesync.question("Enter your first number")
// var second_number = readlinesync.question("Enter your second number")
// var symbol  = readlinesync.question("Enter your symbol")
// // var calulator = num =>{
// var calulator = () => { 
//     if(symbol == "+"){
//         result = first_number+second_number
//         console.log("it is sum of two number",result)
//     }else if(symbol =="-"){
//         result = first_number - second_number
//         console.log("it is subtraction of two number",result)
//     }else if(symbol =="*"){
//         result = first_number*second_number
//         console.log("it is product of two number",result)
//         for(var i=1;i<=result;i++){
//             console.log(i)
//         }
//     }
// }
// calulator()



var readlinesync = require("readline-sync")
var atm_code = () =>{
    var language = readlinesync.question("Enter a Language:-")
    if (language == "English" || language == "Hindi" || language == "Marathi"){
        console.log("move forward.....")
        var Account_Name = readlinesync.question("enter your account name:-")
        if(Account_Name == "saving account" || Account_Name =="current account"){
            console.log("move forward.....")
            var Amount = readlinesync.question("Enter a amount:-")
            if(Amount <= 10000){
                console.log("move forward.....") 
                var PIN = readlinesync.question("Enter you ATM pin Number:-")
                if(PIN =="2728"){
                    console.log("please take your money",Amount,"visit again thank you!!!")
                }else{
                    console.log("opps your atm pin is wrong try again")
                }
            }else{
                console.log("sorry not sufficient amount in your account")
            }
        }else{
            console.log("bank name is wrong enter right banck name please")
        }
    }else{
        console.log("language is not vaild")
    }
}
atm_code()


// // var str = "Hello, I am adam.";
// // var res = str.split(" ");
// // console.log(res)

// name1 = "i am swati"
// list1 = []
// i = 0
// while i<length(name1):
//     n = " "
//     if name1[i]!=" ":
//         n.append(name1[i])
//     list1.append(n)
//     i = i+1
// print(list1)



// var name1= "i am swati"
// var list1 = []
// for(var i = 0;i<name1.length;i++){
//     var emp_str = " "
//     if(name1[i]!=" "){
//         list1.push(name1[i])
//     console.log(list1)    
//     }
// }


// var num=()=>{
//     for(var i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// num()

// for(var i=0 ; i<=10;i++){
//     console.log(i)
// }


