function getComputerChoice() {
  let choice = Math.random();
  if (choice < 1 / 3) {
    return "rock";
  } else if (choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Let's play rock paper scissors! Which do you choose?");
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("You tied!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(
        `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`,
      );
      humanScore++;
    } else {
      console.log(
        `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`,
      );
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  let result;
  if (humanScore === computerScore) {
    result = "tied";
  } else if (humanScore > computerScore) {
    result = "win";
  } else {
    result = "lose";
  }

  console.log(
    `The game is over. You ${result}! Final score: ${humanScore}-${computerScore}`,
  );
}

playGame();
