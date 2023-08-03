const prompt = require("prompt-sync")();

while (true) {
  const answer = prompt("Would you like to play the game? (y/n) (or q to quit):");
  if (answer.toLowerCase() === "q") {
    break;
  }

  if (answer.toLowerCase() === "y") {
    console.log("Great! Let's start!!");
    const answer2 = prompt("Would you like to go left or right? (left/right) :");

    if (answer2.toLowerCase() === "left") {
      console.log("Oopsie Daisey! You go left and fall over a bridge. You lost!");
      continue;
    } else {
      console.log("Great! You are on the right path! You walk towards a forest.");
      const answer3 = prompt("Would you like to go inside the forest? (y/n) :");

      if (answer3.toLowerCase() === "y") {
        console.log("Oh no! You go inside the forest and get mauled by a bear. You lost!")
        continue;
      } else {
        console.log("You avoid the forest and find a horse tied to a tree on the outskirts of the forest. You pet the horse and ride it to go to the castle. You won!");
        continue;
      }
    }
  } else {
    console.log("That's too bad!");
    continue;
  }
}
