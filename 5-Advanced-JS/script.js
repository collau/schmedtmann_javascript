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
 */

// Primitives
// Each variable holds a copy of their data, and do not reference anything

/*
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
*/
/*
No new object was created
Only created a new reference pointing to the first object
obj1 and obj2 variables both hold a reference that point to the exact same object in the memory 
*/

/*
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
*/
/*
When we pass a primitive into the function, a simple copy is created, it will never affect the variable on the outside
When we pass an object into the function, we pass the reference that points to the object, the change will reflect outside
*/


/******************************************************************
 * Passing Functions as Arguments
 */

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Functions that can be used later as the fn function
// Callback functions - functions that we pass into functions that will then call them later

function calculateAge(element) {
    return 2020 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHR(element) {
    if (element >= 18 && element <= 81)
        return Math.round(206.9 - (0.67 * element));
    else
        return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHR);

console.log(ages);
console.log(fullAges);
console.log(rates);
/*


/******************************************************************
 * Functions Returning Functions
 */

// Create a function that returns different interview questions for different jobs

/*
function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");

interviewQuestion("teacher")("Mark");
*/


/******************************************************************
 * Immediately Invoked Function Expressions (IIFE)
 * can only be called once
 * create a new scope that is hidden from the outside scope
 * just for data privacy, not creating reusable code
 */

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

/*
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
//score variable cannot be accessed from outside -- data privacy

//Use parameter with IIFEs
(function(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);
*/


/******************************************************************
 * Closures
 * An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned
 */

// Function to return a function which calculates how many years till retirement
// More generic function to create more specific functions (i.e. interface)
function retirement(retirementAge) {
    var a = " years let until retirement.";
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job == "designer") {
            console.log(name + ", can you please explain what UX design is?");
        } 
        else if (job == "teacher") {
            console.log("What subject do you teach, " + name + "?");
        }
        else {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}
var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
var bakerQuestion = interviewQuestion("baker");

teacherQuestion("Mark");
designerQuestion("Mark");
bakerQuestion("Mark");

// We can use the job variable even after interviewQuestion() has already returned
// Compare to Functions returning functions -- cleaner code