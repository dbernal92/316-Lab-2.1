// Create your game here!
// Superhero Guessing Game

// Select and cache the app element in a variable
const appEl = document.getElementById('app');

const title = document.createElement('title');
title.textContent = "Superhero Guessing Game!";

// Create array of superheroes trivia (question bank)
const superheroQuestions = [];

// Create function to create questions and add to bank
function addQuestion(character, question, choices, answer, fact) {
    superheroQuestions.push({
        character: character,
        question: question,
        choices: choices,
        answer: answer,
        fact: fact
    });
}

// Add trivia questions to bank
// Batman
addQuestion("Batman", "Which of these real-world martial arts is NOT part of Batman's training?", [
    "A) Aikido",
    "B) Brazilian Jiu-Jitsu",
    "C) Krav Maga",
    "D) Capoeira"
], "D) Capoeira", "Batman trained in dozens of martial arts around the world, but Capoeira—originating in Brazil as a mix of dance and combat—was never a part of his core fighting style."
);

addQuestion("Batman", "Before fully embracing the identity of Batman, Bruce Wayne once used which alias in his early crime-fighting days?", [
    "A) Matches Malone",
    "B) The Shadow",
    "C) The Owl",
    "D) The Black Bat"
], "A) Matches Malone", "\"Matches Malone\" was originally a real gangster. After he died, Bruce Wayne assumed his identity to infiltrate Gotham’s underworld."
);

// Superman
addQuestion("Superman", "What is Superman’s favorite Earth food?", [
    "A) Cheeseburgers",
    "B) Tacos",
    "C) Apple Pie",
    "D) Pancakes"
], "C) Apple Pie", "In multiple comics, Superman has mentioned his love for apple pie, reinforcing the \"All-American\" image associated with him."
);

addQuestion("Superman", "Which of these is a little-known fact about Krypton's destruction?", [
    "A) Krypton was destroyed by Brainiac",
    "B) Krypton's core destabilized due to excessive energy harvesting",
    "C) Krypton’s sun exploded, causing a supernova",
    "D) Krypton was frozen in time and shattered"
], "B) Krypton’s core destabilized due to excessive energy harvesting", "Kryptonians over-mined their planet’s core for energy, which caused it to collapse. Jor-El predicted this but was ignored by the Science Council."
);

// Wonderwoman
addQuestion("Wonder Woman", "Which of these is a canonical rule for Wonder Woman’s Lasso of Truth?", [
    "A) It cannot work on other Amazons",
    "B) It forces people to reveal their deepest fear",
    "C) It can be used to compel someone to act against their will",
    "D) It breaks if used on a truly innocent person"
], "C) It can be used to compel someone to act against their will", "Despite the name, the Lasso of Truth does more than just extract facts—it can rewrite someone’s perception of reality."
);

addQuestion("Wonder Woman", "Which of these villains has Wonder Woman never defeated alone?", [
    "A) Ares",
    "B) Darkseid",
    "C) Circe",
    "D) Medusa"
], "B) Darkseid", "While Wonder Woman has fought Darkseid multiple times, she has never defeated him completely on her own."
);

// The Flash
addQuestion("The Flash", "What happens if The Flash runs too fast?", [
    "A) He erases himself from existence",
    "B) He loses his connection to the Speed Force",
    "C) He becomes trapped in a time loop",
    "D) All of the above"
], "D) All of the above", "The Speed Force is unpredictable—Flash has erased himself, lost his powers, and been stuck in time loops by pushing too hard."
);

addQuestion("The Flash", "What bizarre side effect does the Speed Force have on users?", [
    "A) They forget their loved ones' faces over time",
    "B) They constantly need to consume enormous amounts of food",
    "C) They begin vibrating uncontrollably if they stop running",
    "D) They age in reverse if they stop moving for too long"
], "B) They constantly need to consume enormous amounts of food", "The Flash burns through calories at an impossible rate, requiring huge amounts of food to sustain his metabolism."
);

// Green Lantern
addQuestion("Green Lantern", "What is the power source of Green Lantern’s ring?", [
    "A) Cosmic radiation",
    "B) Emotional spectrum energy",
    "C) The blood of fallen Lanterns",
    "D) Alien minerals"
], "B) Emotional spectrum energy", "Each Lantern Corps draws power from different emotions—Green Lanterns use willpower, Red Lanterns use rage, etc."
);

addQuestion("Green Lantern", "Which of these colors is NOT associated with an existing Lantern Corps?", [
    "A) White",
    "B) Indigo",
    "C) Orange",
    "D) Pink"
], "D) Pink", "While there are Lantern Corps representing many colors of the Emotional Spectrum, there is no official Pink Lantern Corps."
);

// Green Arrow
addQuestion("Green Arrow", "Green Arrow once temporarily lost his fortune. How did he adapt?", [
    "A) He lived in the woods and trained himself in survival",
    "B) He built his own weapons out of scrap materials",
    "C) He became mayor of Star City",
    "D) He started working as a private investigator"
], "C) He became mayor of Star City", "In one storyline, Oliver Queen became the mayor of Star City after losing his fortune, attempting to fight crime through politics."
);

addQuestion("Green Arrow", "What is Green Arrow’s most iconic trick arrow?", [
    "A) Boxing Glove Arrow",
    "B) Fireworks Arrow",
    "C) Net Arrow",
    "D) Poison Gas Arrow"
], "A) Boxing Glove Arrow", "The Boxing Glove Arrow is one of Green Arrow’s most famous gimmick weapons, often played for humor but used effectively in combat."
);

// Supergirl
addQuestion("Supergirl", "Which of these weaknesses does Supergirl have that Superman does not?", [
    "A) Magic",
    "B) Lead",
    "C) Psychological conditioning",
    "D) Solar overexposure"
], "C) Psychological conditioning", "In some versions, Supergirl has been brainwashed or conditioned more easily than Superman, partly due to spending her early years in stasis."
);

addQuestion("Supergirl", "In some versions of her origin, why does Supergirl struggle to control her powers more than Superman?", [
    "A) Her cells absorbed yellow sunlight too quickly, causing instability",
    "B) Krypton had stronger gravity when she was born",
    "C) She spent years trapped in the Phantom Zone, delaying her adaptation to Earth",
    "D) She has a genetic mutation that makes her powers unpredictable"
], "C) She spent years trapped in the Phantom Zone, delaying her adaptation to Earth", "Unlike Superman, who gradually adapted to Earth's environment as a baby, Supergirl arrived as a teenager after being stuck in the Phantom Zone. This delay made it harder for her to control her abilities."
);

// Test to ensure objects print
console.log(superheroQuestions);

// Create header for page
const h1 = document.createElement('h1');

h1.textContent = "DC Trivia Game"
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

// Create section to display trivia fact after user submits their answer
const factSection = document.createElement('div');
appEl.appendChild(factSection);

// Create section to display next question button after user submits their answer
const nextQuestionSection = document.createElement('div');
appEl.appendChild(nextQuestionSection);

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
            factSection.textContent = randomQuestion.fact;

            // Create next button
            const nextButton = document.createElement("BUTTON");
            nextButton.textContext = "Next";
            nextQuestionSection.appendChild(nextButton)
            
            // Stops checking once a selected answer is found
            break;
        }
    }
}

const answeredQuestions = []

function removeAnsweredQuestion () {
    superheroQuestions.splice(randomQuestion, 1)
}

submitButton.addEventListener('click', getUserAnswer);
nextButton.addEventListener('click', )
