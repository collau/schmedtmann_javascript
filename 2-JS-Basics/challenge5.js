/******************************************************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% of the bill when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output create
    a. a new array containing all tips, and
    b. an array containing final paid amounts (bill + tip).

HINT: Start with two empty arrays [] as properties then fill them up in the loop.

EXTRA AFTER FINISHING:
Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)

7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK :)
*/

var john = {
    bill: [124, 48, 268, 180, 42],
    calcTip: function(value) {
        if (value < 50) {
            this.tip.push(value * 0.2);
            this.total.push(value + value * 0.2);
        } else if (value >= 50 && value <= 200)
        {
            this.tip.push(value * 0.15);
            this.total.push(value + value * 0.15);
        } else {
            this.tip.push(value * 0.1)
            this.total.push(value + value * 0.1);
        }
    },
    tip: [],
    total: []
}

for (i = 0; i < john.bill.length; i++) {
    john.calcTip(john.bill[i]);
}

console.log(john);

var mark = {
    bill: [77, 375, 110, 45],
    calcTip: function(value) {
        if (value < 100) {
            this.tip.push(value * 0.2);
            this.total.push(value + value * 0.2);
        } else if (value >= 100 && value <= 300)
        {
            this.tip.push(value * 0.1);
            this.total.push(value + value * 0.1);
        } else {
            this.tip.push(value * 0.25)
            this.total.push(value + value * 0.25);
        }
    },
    tip: [],
    total: []
}

for (i = 0; i < mark.bill.length; i++) {
    mark.calcTip(mark.bill[i]);
}
console.log(mark);

function calculateAvg(tip) {

    var value = 0;
    for (var i = 0; i < tip.length; i++)
    {
        value += tip[i];
    }
    return value / tip.length;
}

john.avgTip = calculateAvg(john.tip);
mark.avgTip = calculateAvg(mark.tip);

if (john.avgTip > mark.avgTip) {
    console.log("John's family paid higher tips on average at " + john.avgTip);
} else if (mark.avgTip > john.avgTip) {
    console.log("Mark's family paid higher tips on average at " + mark.avgTip);
} else {
    console.log("Both families paid the same tips on average at " + john.avgTip);
}