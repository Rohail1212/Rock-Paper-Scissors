const choices = ["rock", "paper", "scissors"];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function userChoice(choice) {
  const computer = computerChoice();
  const result = determineWinner(choice, computer);
  displayResult(choice, computer, result);
}

function displayResult(user, computer, result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Your choice: ${user}</p>
    <p>Computer's choice: ${computer}</p>
    <p>${result}</p>
  `;
}
 