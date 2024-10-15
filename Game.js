// JavaScript logic for the Number Guessing Game

// Random number generation between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
const messageElement = document.getElementById('message');
const inputElement = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');

// Function to check the guess
function checkGuess() {
    const userGuess = parseInt(inputElement.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    if (userGuess === randomNumber) {
        messageElement.textContent = "Congratulations! You guessed the correct number!";
        messageElement.style.color = "green";
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
    } else {
        messageElement.textContent = "Too high! Try again.";
    }
}

// Event listener for button click
submitButton.addEventListener('click', checkGuess);

// Event listener for 'Enter' key press
inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
