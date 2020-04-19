/******************************************************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134, 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK :D
*/

var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;

if (avgJohn > avgMike) {
    console.log("John's team wins with an average of " + avgJohn);
} else if (avgMike > avgJohn) {
    console.log("Mike's team wins with an average of " + avgMike);
} else {
    console.log("Both teams drew with an average score of " + avgJohn);
}

var avgMary = (97 + 134 + 105) / 3;
switch (true) {
    case (avgJohn > avgMike && avgJohn > avgMary):
        console.log("John's team wins with an average of " + avgJohn);
        break;
    case (avgMike > avgJohn && avgMike > avgMary):
        console.log("Mike's team wins with an average of " + avgMike);
        break;
    case (avgMary > avgJohn && avgMary > avgMike):
        console.log("Mary's team wins with an average of " + avgMary);
        break;
    case (avgJohn == avgMike && avgJohn > avgMary):
        console.log("John's and Mike's teams win with an average of " + avgJohn);
        break;
    case (avgJohn == avgMary && avgJohn > avgMike):
        console.log("John's and Mary's teams win with an average of " + avgJohn);
        break;
    case (avgMike == avgMary && avgMike > avgJohn):
        console.log("Mike's and Mary's teams win with an average of " + avgMike);
        break;
    case (avgJohn == avgMike && avgJohn == avgMary):
        console.log("All three teams are tied with an average of " + avgJohn);
        break;
}