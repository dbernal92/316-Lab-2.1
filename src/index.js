// Create your game here!
// Superhero Guessing Game

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
        answer: "D",
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
        answer: "A",
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
        answer: "C", 
        fact: 'In multiple comics, Superman has mentioned his love for apple pie, reinforcing the "All-American" image associated with him.'
    });
superheroQuestions.push(
    {
        character: "Superman", 
        question: "Which of these is a little-known fact about Krypton's destruction?", 
        choices: [
            "A) Krypton was destroyed by Brainiac", 
            "B) Krypton’s core destabilized due to excessive energy harvesting", 
            "C)  Krypton’s sun exploded, causing a supernova", 
            "D) Krypton was frozen in time and shattered"
        ],
        answer: "B", 
        fact: 'Kryptonians over-mined their planet’s core for energy, which caused it to collapse. Jor-El predicted this but was ignored by the Science Council.'
    });

// Test to ensure objects print
console.log(superheroQuestions);

let index = Math.floor(Math.random() * superheroQuestions.length);
let randomQuestion = superheroQuestions[index];
console.log(randomQuestion);



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