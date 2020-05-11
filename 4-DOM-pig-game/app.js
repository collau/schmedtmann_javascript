/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Think about the variables that you need
var scoreGlobal = [0,0];
var scoreRound = 0;
var activePlayer = 0; // 0 - first player, 1 - second player --> to read/write into scoreGlobal

// var dice = Math.ceil(Math.random() * 6);


// Access into the DOM
// query selector only selects first element in html file that matches
// # - id of DOM; . - class of DOM

/* Change values in element (Setter) */
// document.querySelector("#current-" + activePlayer).textContent = dice;

/* use html code in textContent */
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"

/* reading value from html and store into variable (Getter) */
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

/* Setting a CSS property: Inspect element to see impact */
document.querySelector(".dice").style.display = 'none';


// Get Element By Id
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

/* Anonymous function on event handler */
document.querySelector(".btn-roll").addEventListener("click", function() {
    
    // 1. Random number
    var dice = Math.ceil(Math.random() * 6);

    // 2. Display the result
    var imageDice = document.querySelector(".dice"); // create a variable to store the DOM selection
    imageDice.style.display = 'block';
    imageDice.src = "dice-" + dice + ".png"; // change the image of the dice


    // 3. Update the round score IF the rolled number is NOT a 1
    if (dice !== 1) {
        // Add score
        scoreRound += dice; // roundScore = roundScore + dice;
        document.querySelector("#current-" + activePlayer).textContent = scoreRound;
    } else {
        // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        scoreRound = 0; // reset round score to 0

        document.getElementById("current-0").textContent = '0';
        document.getElementById("current-1").textContent = '0';

        /* Add, remove and toggle HTML classes */
        // document.querySelector(".player-0-panel").classList.remove("active");
        // document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }
});

/* Callback function on event handler */
// document.querySelector(".btn-roll").addEventListener("click", btn);

// function btn() {
//     console.log("button clicked");
// }