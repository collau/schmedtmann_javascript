/******************************************************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% of the bill when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK :D
*/

function getTip(amount) {
    switch (true) {
        case amount < 50:
            return amount * 0.2;
        case amount >= 50 && amount <= 200:
            return amount * 0.15;
        case amount > 200:
            return amount * 0.10;
        default:
            return 0;
    }
}

var bill = [124, 48, 268];
var tip = new Array();
for (i = 0; i < bill.length; i++) {
    tip.push(getTip(bill[i]));
};

var finalBill = new Array();
for (i = 0; i < bill.length; i++) {
    finalBill.push(bill[i] + tip[i]);
}

console.log(tip);
console.log(finalBill);