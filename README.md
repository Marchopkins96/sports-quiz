# Sports Quiz
(Developed by: Marc Hopkins)

![Responsive](docs/iamresponsive.png)

[Live webpage](https://marchopkins96.github.io/sports-quiz/)

## Introduction 

Sports Quiz is a multiple choice online quiz testing the sports knowledge of the users who play it. There are three levels to choose from. The user will see how many questions are left as they progress and how many they answer correctly and incorrectly.

## Project Goals

### User Goals
- The site user wants to play an online sports quiz which will test their knowledge about an array of sports.

### Site Developer Goals
- The developer's goal is to provide a fun, engaging and adequately challenging sports quiz for its users.
  
## User Experience 

### Strategy 

#### Target Audience
- Users who have a keen interest in sports.
- Users who are looking to put their sports knowledge to the test.
  
#### User Expectations
- Site easy to naviagte around.
- Feedback as a user progresses through the quiz.
- Visually appealing design.

#### User Stories

##### First-Time User 
As a first time user, I want to ...
1. easily navigate through the quiz.
2. get feedback on scores as i progress.
3. easily return to the beginning and play again.
   
##### Returning Users
As a returning user, I want to ...
1. Try different levels.
2. Beat my previous scores.
3. potentially check out the developer who made the quiz.

### Structure & Design 

#### Wireframes

1. **Home Section** displays a short introduction to the quiz and the users are encouraged to click the 'How to Play' button. Further down the page there is an option to enter and submit a username.

![Home](docs/quiz-home.png)

2. **How To Play** Once the how to play button has been clicked it will appear as a pop up card on the screen. It will feature all the instructions for the quiz game. Once a user is finished with the page an exit button will take them back to the home page.

![How to Play](docs/how-to-play.png)

3. **Question Level Choice** The user has three sets of multiple choice questions to choose from.

![Level](docs/level-choice.png)

4. **Quiz Question Area** The user has 10 questions to answer once in this part of the site. The scores will be tracked at the bottom of the quiz card.

![Questions](docs/question-area.png)

5. **End of Quiz Section** Displays a users final score at what level they chose to play at. A short message will appear for the user which will differ depending on how they scored. There will also be a play again option.

![End of Quiz](docs/end-quiz.png)

6. **404 Error Page** A simple 404 page is also included (404.html).

#### Colour Scheme 

The colour scheme is a mix of dull and warm colours. I wanted the background to be in a linear gradient style as i thought this gave the page an eye catching look. All clickabe buttons are coloured in the warm red in keeping with the colour scheme when hovered over. The main area of the Quiz functions will remain in white and the text be black or grey to maintain a good level of contrast and readability.

![Colour Scheme](docs/colourscheme.png)

#### Font

Nunito font has been used for all headings in the quiz, all other features of the game have Lato font applied to them.

## Features 

### Home Page Section 

<details>
<summary>Screenshot of Home Page section</summary>
<img src="docs/homepage.png" width="700">
</details>

- Features a heading and sub-heading of the quiz. 
- Within the contrasting white quiz card area there is a short introduction to the quiz followed by a message encouraging the user to click the 'How to Play' button before submitting a username.
- Below that users are instructed to enter a username in the box provided and then click the submit button below. 
- A link to the developers GitHub account is also included in the footer.

### Question Level Choice Section 

<details>
<summary>Screenshot of the Qustion Level Choice Section</summary>
<img src="docs/levelchoice.png" width="700">
</details>

- Features three clickable levels that a user can choose from: 'A', 'B' or 'C'.

### Quiz Questions Section

<details>
<summary>Screenshot of Quiz Questions Section</summary>
<img src="docs/questions.png" width="700">
</details>

- features the question which is displayed at the top of the quiz card area.
- Four clickable possible answers are listed below the question.
- There is a score area at the bottom of the card that keeps track of a users correct and incorrect answers every time an answer is submitted. It also tracks the amount of questions that are in the users chosen level.
- When users hover over answers the answers the cursor changes to a pointer to indicate which answer they are about to choose.
- A cancel button is featured at the top of the quiz card and if clicked this will end the users game and take them back to the home page.

### End of Quiz Section

<details>
<summary>Screenshot of End of Game Section</summary>
<img src="docs/endquiz.png" width="700">
</details>

- Features the users final score and at what level was played.
- A personal message is posted to the user which changes depending on the users score.
- At the bottom of the quiz card there are two clickable buttons which allow the user to play again with the same username or with a new one.

### Header

<details>
<summary>Screenshot of Header</summary>
<img src="docs/header.png" width="700">
</details>

- The header is featured throughout the quiz game.
- The haader makes it clear as to what the site is.
  
### Footer 

<details>
<summary>Screenshot of the Footer</summary>
<img src="docs/footer.png" width="700">
</details>

- The footer is featured on all pages apart from the 404 error page.
- The footer is blended with the gradient of the background for a clean look.

### Future Additions 

In the future I would like to implement a leaderboard section so that users can save their highscores and try to beat them.

## Technologies Used

### Languages 
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Balsamiq
- Coolers
- Font Awesome
- Favicon.ico
- Git
- GitHub
- Google Fonts

### Helpful Websites

- <a href="https://www.w3schools.com/">W3 Schools</a>
- <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>

## Testing & Validation 

### HTML Validation 

The W3C Validation service was used to validate all HTML code in this project. All pages passed without any issues.

<details>
<summary>Home page and quiz area pages</summary>
<img src="docs/indexhtmlvalidation.png" width="700">
</details>

<details>
<summary>End of Quiz Page</summary>
<img src="docs/endofgamehtmlvalidation.png" width="700">
</details>

<details>
<summary>404 Error Page</summary>
<img src="docs/404pagehtmlvalidation.png" width="700">
</details>

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS code in this project. The code passed with no issues.

<details>
<summary>CSS Validation</summary>
<img src="docs/cssvalidation.png" width="700">
</details>

### JavaScript Validation

The linter <a href="https://jshint.com/">JSHint</a> was used to validate all JavaScript code. All passed okay with only minor grammatical errors flagged, which were fixed.

<details>
<summary>script.js validation part one</summary>
<img src="docs/jsscriptvalidationone.png" width="700">
</details>

<details>
<summary>script.js validation part two</summary>
<img src="docs/jsscriptvalidationtwo.png" width="700">
</details>

<details>
<summary>end.js validation</summary>
<img src="docs/jsendvalidation.png" width="700">
</details>

<details>
<summary>questions.js validation</summary>
<img src="docs/jsquestionsvalidation.png" width="700">
</details>
