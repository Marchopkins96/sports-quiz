// Variables stored in local storage are retrieved
let finalScore = document.getElementById("final-score");
let finalScoreUser = document.getElementById("final-score-user");
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userLevel = localStorage.getItem("userLevel");
let user = window.localStorage.getItem("username");

// Shows the user their final scores and at what level
finalScoreUser.innerText = `${user} Your final score was: `;
finalScore.innerText = `${mostRecentScore} @ ${userLevel} Level `;

const playAgainSameUser = document.getElementById("play-again-same-user");
playAgainSameUser.innerHTML = `Play again as ${user}`;

const playagain = document.getElementById("play-again-btn");
playagain.addEventListener('click', returntostart);

/**
 * This function allows a user to start the quiz again
 */
function returntostart(e) {
    e.preventDefault();
    localStorage.clear();
    load(startOver);
}

/**
 * This function delays the loading of myURL
 * URL is loaded with chosen time delay
 */
function load(myURL) {
    setTimeout(myURL, 0);
}

/**
 * This function loads the last page when the game is over
 */
function startOver() {
    window.location.assign('index.html');
}

