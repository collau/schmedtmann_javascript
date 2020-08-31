/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Think about the variables that you need
var scoreGlobal, scoreRound, activePlayer, gamePlaying;
// var scoreGlobal = [0,0];
// var scoreRound = 0;
// var activePlayer = 0; // 0 - first player, 1 - second player --> to read/write into scoreGlobal

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
// document.querySelector(".dice").style.display = 'none';


// Get Element By Id
// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";
init();

/* Anonymous function on event handler */
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.ceil(Math.random() * 6);
        var dice2 = Math.ceil(Math.random() * 6);

        // 2. Display the result
        var imageDice = document.getElementById("dice-1"); // create a variable to store the DOM selection
        imageDice.style.display = 'block';
        imageDice.src = "dice-" + dice1 + ".png"; // change the image of the dice

        var imageDice2 = document.getElementById("dice-2");
        imageDice2.style.display = 'block';
        imageDice2.src = "dice-" + dice2 + ".png";

        // 3. Update the round score IF the rolled number is NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            // Add score
            scoreRound += dice1 + dice2; // roundScore = roundScore + dice;
            document.querySelector("#current-" + activePlayer).textContent = scoreRound;
        } else {
            nextPlayer();
        }
    }
});

/* Implementing 'Hold' function */
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        // Add round score to global score
        scoreGlobal[activePlayer] += scoreRound;

        // Update the UI
        document.querySelector("#score-" + activePlayer).textContent = scoreGlobal[activePlayer];
        
        // Check if player won the game
        if (scoreGlobal[activePlayer] >= 20) {
            // Replace name with "Winner!"
            document.getElementById("name-" + activePlayer).textContent = "WINNER!";
            // document.querySelector(".dice").style.display = "none";
            // document.querySelector(".dice2").style.display = "none";
            hideDice();

            // Adding / Removing a class defined in CSS
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
})

function nextPlayer() {
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

document.querySelector(".btn-new").addEventListener("click", init)

// Initialize the game
function init() {
    scoreGlobal = [0,0];
    activePlayer = 0;
    scoreRound = 0;
    gamePlaying = true;

    // document.querySelector(".dice").style.display = 'none';
    // document.querySelector(".dice2").style.display = 'none';
    hideDice();

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
}

function hideDice() {
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = 'none';
}

/* Callback function on event handler */
// document.querySelector(".btn-roll").addEventListener("click", btn);

// function btn() {
//     console.log("button clicked");
// }


/* YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6s in a row. After that it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript). This is a good opportunity to use google to figure this out :))
3. Add another dice to the game, so that there are two dices now. The player loses his current score when on of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/