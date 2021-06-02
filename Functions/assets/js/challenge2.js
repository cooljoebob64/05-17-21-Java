// Challenge 2

// Define a hands array with the values 'rock', 'paper', and 'scissors'
// Define a function getComputerHand() that returns a hand from the array using parseInt(Math.random()*10) % 3)
// Define a function called compare() that
// Takes two choices as arguments
// Determines the winner
// Logs the hands played by each
// Returns a string indicating the result
// Play a game

let hands = ["rock", "paper", "scissors"];
let players = ["", "Computer", "Human"];

function getComputerHand() {
  let choice = parseInt((Math.random() * 10) % 3);
  return hands[choice];
}

function compare(firstPlayerHand, secondPlayerHand) {
  console.log(`${players[1]} hand: ${firstPlayerHand}`);
  console.log(`${players[2]} hand: ${secondPlayerHand}`);

  if (firstPlayerHand === secondPlayerHand) return "Tie!";

  switch (firstPlayerHand) {
    case hands[0]: {
      switch (secondPlayerHand) {
        case hands[1]: {
          return players[2];
        }
        case hands[2]: {
          return players[1];
        }
      }
    }
    case hands[1]: {
      switch (secondPlayerHand) {
        case hands[0]: {
          return players[1];
        }
        case hands[2]: {
          return players[2];
        }
      }
    }
    case hands[2]: {
      switch (secondPlayerHand) {
        case hands[0]: {
          return players[2];
        }
        case hands[1]: {
          return players[1];
        }
      }
    }
    default: {
      return "Error!";
    }
  }
}

let humanHand = prompt(
  `Enter a hand (${hands[0]}, ${hands[1]}, or ${hands[2]}):`
);
console.log(`The winner is: ${compare(getComputerHand(), humanHand)}!`);
