/******************************************************************
* Variables and Data Types: Number, String, Boolean, Undefined, Null
*/

// Variable cannot start with numbers of symbols (except for $ or _)

/*
var firstName = 'Kevin';
console.log(firstName);

var lastName = 'De Bruyne';
var age = 26;
var fullAge = true;
console.log(fullAge);

var job; //undefined variable
console.log(job);

// Log text into console
console.log('Hello World again!');
*/

/******************************************************************
* Variable mutation and type coercion 
*/
/*
var firstName = 'Trent';
var age = 21;

// Type coercion
console.log(firstName + ' ' + age); //JS auto coerces types from one another as it is needed

var job, isMarried;
job = 'footballer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty-one';
job = 'right-back';

// Pop-up alert with message
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Pop-up with message and editText (defining variable with user input in UI)
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/******************************************************************
* Basic Operators
*/

/*
// Math Operators
var year, yearTrent, yearVirgil;
now = 2019;
ageTrent = 21;
ageVirgil = 28;

yearTrent = now - ageTrent;
yearVirgil = now - ageVirgil;

console.log(yearTrent);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var trentOlder = ageTrent < ageVirgil;
console.log(trentOlder);

// typeof operator
console.log(typeof trentOlder);
console.log(typeof ageTrent);
console.log(typeof 'Mark is older than John');
*/

/******************************************************************
* Operator Precedence
*/

/*
var now = 2019;
var yearTrent = 1998;
var fullAge = 21;

// Multiple operators
var isFullAge = now - yearTrent >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageTrent = now - yearTrent;
var ageVirgil = 28;
var average = (ageTrent + ageVirgil) / 2;
console.log(average);

// Multiple assignments - Assignment operators works from right-to-left
var x, y;
x = y = (3 + 5) * 4 - 6; //26
console.log(x, y); //26 26

// More operators
x *= 2; // x = x * 2;
console.log(x);
x += 10; // x = x + 10;
console.log(x);
x++; // x += 1 // x = x + 1
console.log(x);
*/

/******************************************************************
* if / else statements
*/

/*
var firstName = 'Adrian';
var civilStatus = 'married';    

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/

/******************************************************************
* Boolean logic
*/
// AND (&&), OR (||), NOT (!)

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}
*/

/******************************************************************
* Ternary Operator and Switch statements
*/

/*
// Ternary Operator ==> condition ? if block : else block
var firstName = 'John';
var age = 21;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

/*
// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/******************************************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
// == does type coercion; === strict quality comparisons

if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/******************************************************************
* Functions
*/

/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/******************************************************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {};

// Function Expression - always produces a value, as long as a code results in a single value
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.'; //return will finish the function
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));