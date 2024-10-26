document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    
    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    
    // Event listeners for the buttons
    rockButton.addEventListener('click', () => playGame('rock'));
    paperButton.addEventListener('click', () => playGame('paper'));
    scissorsButton.addEventListener('click', () => playGame('scissors'));

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
        
        const winner = determineWinner(playerChoice, computerChoice);
        winnerDisplay.textContent = winner;
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return "Player Wins!";
        } else {
            return "Computer Wins!";
        }
    }
});
