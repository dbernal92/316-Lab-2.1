// Create your game here!
// Color Guessing Game

// Create list of colors
const colorList = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "brown", "black"];
console.log(colorList);

let i = Math.floor(Math.random() * colorList.length);
let randomColor = colorList[i];
console.log(randomColor)