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