// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
// }
// var d = new Car("BMW",2020);
// console.log(d)                                 
                                            


// class students {
//   constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//   }
// };
// var person2 = new students('John', 'Smith');
// console.log(person2)


// class universal {     //class works like function//
//     constructor(Earth,jupiter,mars,mercury,){   //in constructor we add our method and how many parimeter we want we can add
//     this.Earth= Earth;    //this is use to take perticulary elements
//     this.jupiter=jupiter;
//     this.mars=mars;
//     this.mercury=mercury 
//     this.Earth=mercury  //in this earth is also getting update and value will be what is value of mercury
//     }
// }
// var planets = new universal ("1","2","3","4")
// console.log(planets)


// class friends {
//     constructor(Names,date){
//     this.Names=Names;
//     this.date=date;
//     }
// }
// var pagal = new friends("parveen",2020)
// console.log(pagal)

// class  navgurukul_data {
//     constructor (students_name,age,qulificaton,coming_date){
//       this.students_name=students_name;
//       this.age = age;
//       this.qulificaton = qulificaton;
//       this.coming_date = coming_date;
//     }

// }
// var students = new navgurukul_data ("swati",20,"12th passout","10 jan 2020")
// var a=new navgurukul_data("rani",23,"12th","02 sep")

// console.log(students)
// console.log(a)

// class love{
//     constructor(boy_name,start_date,relationship_year){
//       this.boy_name = boy_name;
//       this.start_date = start_date;
//       this.relationship_date = relationship_year;
//     }
// }
// var relationship = new love("yousuf","8 march 2013","8 year completed")
// var ex_bf = new love("no one","non","blank")
// console.log(relationship)
// console.log(ex_bf)


// class data{
//     constructor(name1,surname){
//       this.first_name=name1;
//       this.first_surname=surname;
//     }
// }
// class data2{
//   constructor(name2,surname1){
//     this.name2=name2;
//     this.surname1=surname1;
//   }
// }
// var a = new data ("swati","wahmare")
// var b = new data2("parveen","sidqui")
// console.log(a)
// console.log(b)



// class data{
//     constructor(swati,kritika,parveen,sarmistha){
//       this.swati = swati;
//       this.kritika = kritika;
//       this.parveen = parveen;
//       this.sarmistha = sarmistha;
//     }
// }
// class data1{
//     constructor(priyanka,karshima,rani,sonu){
//       this.priyanka = priyanka;
//       this.karshima = karshima;
//       this.rani = rani;
//       this.sonu = sonu;
//     }
// }

// var couple1 = new data("yousuf","nitin","deepak","soon..") 
// let couple2 = new data2("shubham","aniket","salu","waiting..")
// console.log(couple1)
// console.log(couple2)                                  


// var a = class{
//     constructor(mother,father){
//       this.father = father;
//       this.mother = mother;
//     }
// }
// console.log(a.name)

// var a = class{
//   constructor(brother,sister){
//     this.brother = brother;
//     this.sister=sister;
//   }
// }
// console.log(a.name)



// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
// mycar = new Model("Ford", "Mustang");
// console.log(mycar)


// class family{
//     constructor(father){
//         this.head=father
//     }

//     first(){
//         return `${this.father} is head of the house!`;
//     }
// }
//     class member extends family{
//         constructor(father,mother){
//             super(father)
//             this.queen = mother;
//         }

//         second(){
//             return `${this.mother} is queen of the house!`;
//         }
//     }
// // var names = new member("anand","indu")
// console.log(family.head)

// console.log(family.queen)

// class employee {
//     constructor (name_emp,age_emp){
//         this.name_emp = name_emp
//         this.age_emp = age_emp
//     }
// }


// class people extends employee{
//     constructor (name_emp,age_emp,emp_salary){
//         super(name_emp,age_emp)
//         this.emp_salary = emp_salary
        
//     }
// }; 

// var information = new people("yousuf",20,"25000 /-")
// console.log(information)



// var new_list = [4,5,7,8,4,3,10,12,14,16]
// empty_list=[]
// var i = 0
// while(i<=new_list.length){
//     var j =i%2;
//     while(j==0){
//         // var c= new_list[j]%2==0
//         // empty_list.push(c)
//         j=j+i
//     }i=i+1
// }
// console.log(empty_list)
                                

// new_list = [4,5,7,8,4,3,10,12,14,16]
// empty_list=[]
// i =0
// for i in new_list:
//     even = i%2
//     while even==0:
//         print(i)
//         even+=1





// S_Ww_Aaa_Tttt_Iiiii







// classes are special function,but instend of usig function we are using
// class keyword,properties are assigned inside a constructor()more that one
// arguments we can pass.
// and new() help we get the perticulary ,properties
// A class is a type of function,
  
                                                                            