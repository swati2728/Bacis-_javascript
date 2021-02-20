const secret = new WeakMap();                                       //Used to create private properties

class Human{                                                        //Parent class Human
    constructor(name, age, sex){                                    //Initializes an object when class is instantiated
        this.name = name;                                           //this keyword assigns value passed from instance or child class
        this.age = age;
        this.sex = sex;
    }
    eat(){                                                          //method of parent class
        return `${this.name} is eating!`;
    }
    ageOf(){                                                          //method of parent class         
        return `${this.name} is ${this.age} years old.`;
    }
    sex(){                                                          //method of parent class
        return `${this.name} is a ${this.sex}`;
    }
}

class Student extends Human{                                        //Child class of Human inheriting its properties and methods
    constructor(name, age, sex, subject, language){                 //Initializes an object when class is instantiated
        super(name, age, sex)                                       //Super is a method that sets the inheritance properties calling the parent class
        this.subject = subject
        this.language = language
    }
    study(){                                                        //Method of child class
        return `${this.name} is studying ${this.subject}. `
    }                               

    program(){
        return `${this.name} can programme in ${this.language}.`    //Method of child class
    }
    details(){                                                      //Method of child class
        return `${super.sex()} and ${super.ageOf()}`
    }
}

class Employee extends Human{                       
    constructor(name, age, sex, position, location, salary){
        super(name, age, sex)
        this.position = position
        this.location = location
        secret.set(this, {_salary : salary})                        //Private property initialized
    }
    work(){                                                         
        return `${this.name} works as a ${this.position} in ${this.location}`
    }
    income(){
        return `${this.name} earns ${secret.get(this)._salary} per month`
    }
}

class Teacher extends Human{
    constructor(name, age, sex, university, teaches){
        super(name, age, sex)                       
        this.university = university
        secret.set(this, {_teaches : teaches})
    }
    get teachWhat(){                                                //Getter method that gets the properties when called
        return `${this.name} teaches as a ${secret.get(this)._teaches} at ${this.university}`
    }
    set setTeachwhat(newSubject){                                   //Setter method that sets a new value of the private property
        secret.get(this)._teaches = newSubject
    }
}

//Creating an instance of the object Student and accessing its function
const student = new Student("Angela Moss", 27, "Female", "Computer Science", ["Python", "JavaScript", "NodeJS", "ReactJS", "MySQL"])
console.log(student.study());
console.log(student.program());
console.log(student.details());
console.log(student.eat());
console.log(student.ageOf());

//Creating an instance of the object Employee and accessing its function
const employee = new Employee("Andrew Ng", 43, "Male", "Computer Scientist", "Canberra", "$90000")
console.log(employee.work());
console.log(employee.income());
console.log(employee.ageOf());

//Creating an instance of the object Teacher and accessing its function
const teacher = new Teacher("Elliot Anderson", 30, "Male", "Harvard University", ["Mathematics", "Physics"])
console.log(teacher.teachWhat);
teacher.setTeachWhat = "Computer Science"                            //Setting new value to `teaches` property
console.log(teacher.setTeachWhat)






