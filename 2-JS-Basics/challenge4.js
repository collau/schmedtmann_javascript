/******************************************************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK :)
*/

var mark = {
    fullName: 'Mark van Bommel',
    mass: 70,
    height: 1.70,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Arne Riise',
    mass: 78,
    height: 1.82,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBmi();
john.calcBmi();

// can replace john.bmi using the method call (john.calcBmi()); --> only if the method returns the value
if (mark['bmi'] > john['bmi']) {
    console.log(mark.fullName + " has the higher BMI of " + mark.bmi);
} else if (mark['bmi'] < john['bmi']) {
    console.log(john.fullName + " has the higher BMI of " + john.bmi);
} else {
    console.log("Both have the same BMI of " + mark.bmi);
}