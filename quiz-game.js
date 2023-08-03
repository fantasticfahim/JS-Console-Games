const prompt = require("prompt-sync")();

console.log("Welcome to the Game of Thrones Quiz Game!");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the sigil of House Targaryen?");
const correctAnswer1 = "THREE HEADED DRAGON";

if (answer1.toUpperCase() === correctAnswer1) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const answer2 = prompt("What is the name of the order which protects the Wall?");
const correctAnswer2 = "THE NIGHT'S WATCH";

if (answer2.toUpperCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const answer3 = prompt("What is the name of the native people who lived in the Westeros before being driven up to the north by the Andals?");
const correctAnswer3 = "THE FIRST MEN";

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", percent, "percent!");