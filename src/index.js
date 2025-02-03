// Create your game here!
// Superhero Guessing Game

// Select and cache the app element in a variable
const appEl = document.getElementById('app');

const title = document.createElement('title');
title.textContent = "Superhero Guessing Game!";

// Create array of superheroes trivia
const superheroQuestions = [];
superheroQuestions.push(
    {
        character: "Batman",
        question: "Which of these real-world martial arts is NOT part of Batman's training?",
        choices: ["A) Aikido",
            "B) Brazilian Jiu-Jitsu",
            "C) Krav Maga",
            "D) Capoeira"],
        answer: "D) Capoeira",
        fact: "Batman trained in dozens of martial arts around the world, but Capoeira—originating in Brazil as a mix of dance and combat—was never a part of his core fighting style."
    });
superheroQuestions.push(
    {
        character: "Batman",
        question: "Before fully embracing the identity of Batman, Bruce Wayne once used which alias in his early crime-fighting days?",
        choices: [
            "A) Matches Malone",
            "B) The Shadow",
            "C) The Owl",
            "D) The Black Bat"],
        answer: "A) Matches Malone",
        fact: '"Matches Malone" was originally a real gangster. After he died, Bruce Wayne assumed his identity to infiltrate Gotham’s underworld.'
    });
superheroQuestions.push(
    {
        character: "Superman",
        question: "What is Superman’s favorite Earth food?",
        choices: [
            "A) Cheeseburgers",
            "B) Tacos",
            "C) Apple Pie",
            "D) Pancakes"
        ],
        answer: "C) Apple Pie",
        fact: 'In multiple comics, Superman has mentioned his love for apple pie, reinforcing the "All-American" image associated with him.'
    });
superheroQuestions.push(
    {
        character: "Superman",
        question: "Which of these is a little-known fact about Krypton's destruction?",
        choices: [
            "A) Krypton was destroyed by Brainiac",
            "B) Krypton's core destabilized due to excessive energy harvesting",
            "C)  Krypton’s sun exploded, causing a supernova",
            "D) Krypton was frozen in time and shattered"
        ],
        answer: "B) Krypton’s core destabilized due to excessive energy harvesting",
        fact: 'Kryptonians over-mined their planet’s core for energy, which caused it to collapse. Jor-El predicted this but was ignored by the Science Council.'
    });

// Test to ensure objects print
console.log(superheroQuestions);

// Create header for page
const h1 = document.createElement('h1');

h1.textContent = "DC Guessing Game!"
appEl.appendChild(h1)

// Select question (object) from the array
let index = Math.floor(Math.random() * superheroQuestions.length);
let randomQuestion = superheroQuestions[index];

// Text to ensure the question is being selected via index
console.log(randomQuestion);

// Create a section on the page to display the trivia question
const questionSection = document.createElement('div');

// Set the id to 'question' to indicate where the trivia question should print
questionSection.id = "question";

// Extracts the question value from the object and prints it as text content
questionSection.textContent = randomQuestion.question;

// Add the div that contains the questions to the app
appEl.appendChild(questionSection);

// Create a section on the page to display trivia choices
const choiceSection = document.createElement('div');

// Set the id to 'choices' to indicate where the trivia choices should print
choiceSection.id = "choices";

// Add the div that contains the questions to the app
appEl.appendChild(choiceSection);

// Loops through the choices to create a radio button for each
for (let choiceText of randomQuestion.choices) {
    let label = document.createElement('label');
    let input = document.createElement('input');

    input.type = 'radio';
    input.name = "answer";
    input.value = choiceText;

    label.appendChild(input);
    label.appendChild(document.createTextNode(choiceText));
    choiceSection.appendChild(label);

    // Put each trivia choice on its own line
    const br = document.createElement('br');
    label.append(br);
}

// Create section for submission
const submissionSection = document.createElement('div');
appEl.appendChild(submissionSection);

// Create submit button
const submitButton = document.createElement("INPUT");
submitButton.setAttribute("type", "submit");

submissionSection.appendChild(submitButton);

// Create function to compare user answer to correct answer
function getUserAnswer() {
    let userChoices = document.querySelectorAll('input[name="answer"]');
    console.log('Radio buttons found:', userChoices.length);

    for (let choice of userChoices) {
        console.log("Checking:", choice.value, "Checked:", choice.checked);

        if (choice.checked) {
            console.log("User selected:", choice.value);

            if (choice.value === randomQuestion.answer) {
                alert("Correct!");
            } else {
                alert("Sorry, not quite right!");
            }

            break; // Stops checking once a selected answer is found
        }
    }
}

submitButton.addEventListener('click', getUserAnswer);

// Create section to display results
const feedbackSection = document.createElement('div');
appEl.appendChild(feedbackSection);

// Create buttons for multiple choice options
// var choiceA = document.createElement("INPUT");
// choiceA.setAttribute("type", "radio");
// choiceSection.appendChild(choiceA);

// var choiceB = document.createElement("INPUT");
// choiceB.setAttribute("type", "radio");
// choiceSection.appendChild(choiceB);

// var choiceC = document.createElement("INPUT");
// choiceC.setAttribute("type", "radio");
// choiceSection.appendChild(choiceC);

// var choiceD = document.createElement("INPUT");
// choiceD.setAttribute("type", "radio");
// choiceSection.appendChild(choiceD);












// // Get User Input
// let userInput = window.prompt("Which superhero do you think it is?");
// console.log("User entered:", userInput);





// Object template for question info
// {
//     character: "", 
//     question: "", 
//     choices: [
//         "A) ", 
//         "B) ",
//         "C) ", 
//         "D) "
//     ],
//     answer: "", 
//     fact: ""
// })