/*jshint esversion: 6 */

const howToPlayBtn = document.getElementById('howToPlayBtn');
const howToPlay = document.getElementById('howToPlay');
const closeBtn = document.getElementsByClassName('play-close-btn')[0];
const cancelGame = document.getElementById("cancel-btn");

//these event listeners relate to the How to Play button window which the user clicks on the home page
// the functionality of this feature were inspired by https://github.com/rpf13/Do-You-Know-It 
//and code was used and adapted in this quiz game
howToPlayBtn.addEventListener('click', displayHowToPlay);
closeBtn.addEventListener('click', hideHowToPlay);
cancelGame.addEventListener('click', goHome);

// If a user is loading the game for the first time, they will need to input a username,
//The username will be stored in localStorage.
if (window.localStorage.getItem("username")) {

    document.getElementById("levelchoice-area").style.display = "initial";
    document.getElementById("username-area").style.display = "none";
    let user = window.localStorage.getItem("username");
    document.getElementById("levelchoice-heading").innerText = `Welcome to the quiz ${user}`;

} else if (!window.localStorage.getItem("username")) {

    const submit = document.getElementById("submit");
    submit.addEventListener('click', validate);

}

/**
 * This function validates that a username was input. 
 * It shows an error messsage if not.
 * when a username is provided it is saved and shown throughout the quiz.
 * Code used and adapted from https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/
 * Code was also used and adapted from https://github.com/URiem/geography-game in the making of this quiz game.
 * (e) event of a click 
 */
function validate(e) {
    e.preventDefault();

    const usernameField = document.getElementById("username");

    if (!usernameField.value) {
        const usernameError = document.getElementById("usernameError");
        usernameError.classList.add("visible");
        usernameError.classList.add("invalid");
        usernameError.setAttribute("aria-hidden", false);
        usernameError.setAttribute("aria-invalid", true);
        usernameError.innerText = "Please enter a username to proceed!";
    } else if (usernameField.value) {
        window.localStorage.setItem("username", usernameField.value);
        document.getElementById("levelchoice-area").style.display = "initial";
        document.getElementById("username-area").style.display = "none";
        window.localStorage.setItem("username", usernameField.value);
    }

    let user = window.localStorage.getItem("username");
    document.getElementById("levelchoice-heading").innerText = `Welcome to the quiz ${user}!`;
}

let questionArea = document.getElementById('question-area');
let answerArea = document.getElementById('answers-list');
let allQuestions;
let current = 0;
let score = 0;


/**
 * This function loads the users choice of questions.
 * 
 * levelChoice - indicates the set of questions the user picks
 * curr - the number of the current question
 * allQuestions - array of questions used 
 */
function questionChoice(levelChoice, curr) {
    let userChoice = levelChoice.textContent;
    if (userChoice === 'A') {
        allQuestions = allQuestionsA;
    } else if (userChoice === 'B') {
        allQuestions = allQuestionsB;
    } else if (userChoice === "C") {
        allQuestions = allQuestionsC;
    }

    // start quiz
    loadQuestion(curr);

    document.getElementById("total-questions").textContent = allQuestions.length;
    document.getElementById("level").textContent = userChoice;
    document.getElementById("game-area").style.display = "initial";
    document.getElementById("levelchoice-area").style.display = "none";
    localStorage.setItem("userLevel", userChoice);

    return allQuestions;

}

/**
 * This function loads the current question with answers in the game area
 * curr - number variable of the current question
 */
function loadQuestion(curr) {
    let question = allQuestions[curr].question;

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;

    let answers = allQuestions[curr].answers;

    answerArea.innerHTML = '';

    for (let i = 0; i < answers.length - 1; i += 1) {
        let createList = document.createElement('li');
        let text = document.createTextNode(answers[i]);

        createList.appendChild(text);
        createList.addEventListener("click", checkAnswer(i, answers));

        answerArea.appendChild(createList);
    }

}

/**
 * This function will run when a user clicks on an answer.
 * it checks if the answer clicked is the correct one. Then it checks
 * if that was the last question in the array, if not then the 
 * next question will load. If it was then the user will be let know 
 * the game is over.
 * code or this function used and adapted from https://github.com/URiem/geography-game 
 * i - index of the answer clicked by the user
 * arr - array of possible answers for the current question
 */
function checkAnswer(i, arr) {

    return function () {
        let givenAnswer = i;
        let correctAnswer = arr[arr.length - 1];

        if (givenAnswer === correctAnswer) {
            incrementScore();
        } else {
            incrementWrongAnswer();
        }

        if (current < allQuestions.length - 1) {
            current += 1;
            document.getElementById("current-question").innerText = current + 1;
            loadQuestion(current);
        } else {
            questionArea.innerHTML = 'Fininshed! Final score page loading ..';
            answerArea.innerHTML = '';
            score = document.getElementById("correct-counter").innerText;
            localStorage.setItem("mostRecentScore", score);
            load(gameOver);
        }
    };
}

/**
 * This function increments correct scores.
 * code used and adapted from Love Maths project
 */
function incrementScore() {
    let oldscore = parseInt(document.getElementById("correct-counter").innerText);
    document.getElementById("correct-counter").innerText = ++oldscore;
}

/**
 * This function increments wrong answers.
 * code used and adapted from Love Maths project
 */
function incrementWrongAnswer() {
    let oldscore = parseInt(document.getElementById("wrong-counter").innerText);
    document.getElementById("wrong-counter").innerText = ++oldscore;
}

/**
 * This fuunction delays the loading of myURL
 * URL is loaded with chosen time delay
 */

function load(myURL) {
    setTimeout(myURL, 2000);
}

/**
 * This function loads the last page when the game is over
 */

function gameOver() {
    window.location.assign('end_quiz.html');
}

/**
 * This function will display the how to play window to the user
 * adapted from project https://github.com/rpf13/Do-You-Know-It
 */
function displayHowToPlay() {
    howToPlay.style.display = "block";
}

/**
 * This function will hide the how to how to play window once the close button is clicked
 * adapted from project https://github.com/rpf13/Do-You-Know-It
 */
function hideHowToPlay() {
    howToPlay.style.display = "none";
}

function goHome(e) {
    e.preventDefault();
    localStorage.clear()
    location.href = "index.html";
}