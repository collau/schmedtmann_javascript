///////////////////////////////////////
// Lecture: Hoisting

/*
- Code is scanned for FUNCTION DECLARATIONS: for each function, a property is created in the Variable Object, pointing to the function.
- Code is scanned for variable declaration: for each variable, a property is created in the Variable Object, and set to undefined.
*/

// functions
calculateAge(1965); // function ran before declaration


function calculateAge(year) {
    console.log(2019 - year);
}
// all functions is stored in the execution context before running the code

// This is not a function declaration, but a function expression
// function expression can only be run after definition
var retirement = function(year) {
    console.log(65 - (2019 - year));
}
retirement(1990);


// variables

// age variable is scanned, property created, set to undefined
console.log(age);

// age variable is defined
var age = 23; // this age variable is stored in the global execution context
console.log(age);

function foo() {
    var age = 65; // this age variable is stored in another execution context
    console.log(age);
}
foo();
console.log(age);






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









