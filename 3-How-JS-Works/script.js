///////////////////////////////////////
// Lecture: Hoisting

/*
- Code is scanned for FUNCTION DECLARATIONS: for each function, a property is created in the Variable Object, pointing to the function.
- Code is scanned for variable declaration: for each variable, a property is created in the Variable Object, and set to undefined.
*/

/*
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
*/





///////////////////////////////////////
// Lecture: Scoping
// where can we access a certain variable/function


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
var a = 'Hello!'; // defined in Global scope
first();

function first() {
    var b = 'Hi!'; // defined in first() scope, access to first() and Global scopes
    second();

    function second() {
        var c = 'Hey!'; // defined in second() scope, access to second(), first() and Global scopes
        third()
    }
}

function third() { // third() scope, access to third() and Global scopes
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









