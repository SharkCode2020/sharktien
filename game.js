function playerChoice(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomIndex];

    const result = compareChoices(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, result);
}

function compareChoices(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Your choice: ${player}</p>
        <p>Computer's choice: ${computer}</p>
        <p>${result}</p>
    `;
}
