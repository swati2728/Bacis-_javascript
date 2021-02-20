// function myMap(my_array, callback){
// 	var arr = [];
// 	for(var index in my_array){
        // console.log(callback(my_array[index]))
// 		arr.push(callback(my_array[index]));
// 	}
// 	return arr;
// }

// var some_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myMap(some_array, (i) => i + 1 ));  //increments array element by 1.
// console.log(myMap(some_array, (index) => index * 2 ));  //doubles each array element.
// console.log(myMap(some_array, (index) => index * index ));  //squares each array element.


// function old_list(num1,callback,callback2){
//     callback(num)
//     callback2(hour)
//     var empty_list = []
//     for(var i in num1){
//         if (num1=="swati"){
//             empty_list.push(i)
//             console.log(empty_list)
//         }
//     }
//     // callback(empty_list)
// }
// function num(s){
//     console.log("kajska")

// function hour(f){
//     console.log("hffdv")
// }
// var readlinesync = require("readline-sync")
// var num1  = readlinesync.question("enter a name")
// old_list(num1,num,hour)




// function calulator(number1){
//     var new_list = []
//     // console.log(number1)
//     for(var i = 1; i<=number1; i++){
//         // console.log(i)
//         new_list.push(i);
//     }
//     return new_list
// }
// var readlinesync = require("readline-sync")
// var num = readlinesync.question("enter a number")
// console.log(calulator(num))




// const movies = [
//     { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
//     { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
// ]

// function getMovies(){
// setTimeout(() => {
//     movies.forEach((movie, index) => {
//         console.log(movie.title)
//     })
// }, 1000);
// }

// function createMovies(movie){
// setTimeout(() => {
//     movies.push(movie)
// }, 2000);
// }

// getMovies();


const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie, callback){
setTimeout(() => {
    movies.push(movie);
    callback();
}, 2000);
}

createMovies({ title: `Return of the Jedi`, 
                body:`Luke Skywalker attempts to bring his father back to the light side of the Force. 
                At the same time, the rebels hatch a plan to destroy the second Death Star.` }, getMovies);