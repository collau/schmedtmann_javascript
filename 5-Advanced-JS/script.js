/******************************************************************
 * Function Constructors 
 * 
 * Creating objects using function constructor
 * Always start function constructor with capital letters
 */

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

/* In console, run hasOwnProperty function to check if property is of object or prototype
john.hasOwnProperty('job') --> true
john.hasOwnProperty('lastName') --> false
lastName is a property of the Person prototype, and will apply to all Persons
*/