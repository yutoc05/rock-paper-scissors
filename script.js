function getComputerChoice() {
  const choice = Math.random();
  if (choice < 1 / 3) {
    return "rock";
  } else if (choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const results = document.querySelector(".results");

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      results.textContent = "You tied!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      results.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
      humanScore++;
    } else {
      results.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
      computerScore++;
    }
    if (humanScore < 5 && computerScore < 5) {
      results.textContent += ` Current score: ${humanScore}-${computerScore}`;
    } else {
      results.textContent += ` The game is over. Final score: ${humanScore}-${computerScore}`;
    }
    document.body.append(results);
  }

  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      playRound(button.classList[0], getComputerChoice());
    });
  }
}

playGame();
