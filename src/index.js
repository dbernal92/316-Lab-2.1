// Create your game here!
// Superhero Guessing Game

const title = document.createElement('title');
title.textContent = "Superhero Guessing Game!";

// Create list of colors
const colorList = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "brown", "black"];
console.log(colorList);

let index = Math.floor(Math.random() * colorList.length);
let randomColor = colorList[index];
console.log(randomColor)

// Get User Input
let userInput = window.prompt("What color dod you think it is?");
console.log("User entered:", userInput);