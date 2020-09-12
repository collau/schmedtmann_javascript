/******************************************************************
 * Function Constructors 
 * 
 * Creating objects using function constructor
 * Always start function constructor with capital letters
 */

/* 
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    //Insert function in constructor
    // this.calculateAge = function() {
    //     console.log(2020 - this.yearOfBirth);
    // }
}

// Attaching methods into function constructor's prototype property
// Inherited by all prototypes
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

// Attaching additional properties into function constructor's prototype
Person.prototype.lastName = 'Smith';

// Instantiation
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/

/* In console, run hasOwnProperty function to check if property is of object or prototype
john.hasOwnProperty('job') --> true
john.hasOwnProperty('lastName') --> false
lastName is a property of the Person prototype, and will apply to all Persons
*/


/******************************************************************
 * Object.create
 * 
 * 1. Define an object that will act as the prototype
 * 2. Create a new object based on that prototype
 */

 /*
 // Write prototype as a simple object
 var personProto = {
     calculateAge: function() {
         console.log(2020 - this.yearOfBirth);
     }
 };

 var john = Object.create(personProto);
 john.name = 'John';
 john.yearOfBirth = 1990;
 john.job = 'teacher';

 var jane = Object.create(personProto, 
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });

*/


/******************************************************************
 * Primitives vs Objects
 * 
 * 
 * 
 */

// Primitives
// Each variable holds a copy of their data, and do not reference anything
var a = 23;
var b = a;
a = 46; // doesn't affect value of variable b
console.log("a is " + a); // 46
console.log("b is " + b); // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26 
};
var obj2 = obj1;
/*
No new object was created
Only created a new reference pointing to the first object
obj1 and obj2 variables both hold a reference that point to the exact same object in the memory 
*/

obj1.age = 63;
console.log(obj1.age); // 63
console.log(obj2.age); // 63

// Functions
var age = 29;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age); // 27
console.log(obj.city); // San Francisco
/*
When we pass a primitive into the function, a simple copy is created, it will never affect the variable on the outside
When we pass an object into the function, we pass the reference that points to the object, the change will reflect outside
*/