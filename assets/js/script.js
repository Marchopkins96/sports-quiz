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
let answersArea = document.getElementById('answers-list');
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
function questionChoice(levelChoice,curr) {
    let userChoice = levelChoice.textContent;
    if (userChoice === 'A') {
        allQuestions = allQuestionsA;
    } else if (userChoice === 'B') {
        allQuestions = allQuestionsB;
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


