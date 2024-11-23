let randomNumber;
let attempts = 0;

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';
    startGame();
});

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerText = "";
    document.getElementById('guess').value = "";
    document.getElementById('playAgain').style.display = "none";
}

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        document.getElementById('result').innerText = "Veuillez entrer un nombre entre 1 et 100.";
    } else if (userGuess === randomNumber) {
        document.getElementById('result').innerText = `Exactly ;) The number ${randomNumber} was found in ${attempts} tries.`;
        document.getElementById('playAgain').style.display = "block";
    } else {
        let exclamations = "!".repeat(attempts - 1); // Crée des points d'exclamation en fonction du nombre de tentatives
        if (userGuess < randomNumber) {
            document.getElementById('result').innerText = `More${exclamations}`;
        } else {
            document.getElementById('result').innerText = `Less${exclamations}`;
        }
    }
});

document.getElementById('playAgain').addEventListener('click', function() {
    startGame();
});
