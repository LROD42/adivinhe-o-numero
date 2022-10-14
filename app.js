let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let numberOfGuess = 0;
let guessedNumber = [];
console.log(answer);
function play() {
    let user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100) {
        alert("Por favor, digite um numero entre 1 e 100");
    }
    else {
        guessedNumber.push(user_guess);
        numberOfGuess += 1;

        if(user_guess < answer) {
            msg1.textContent = "Seu chute foi muito baixo";
            msg2.textContent = "Numero de tentativas: " + numberOfGuess; 
            msg3.textContent = "Numeros que tentou:  " + guessedNumber; 
        }
        else if(user_guess > answer) {
            msg1.textContent = "Seu chute foi muito alto";
            msg2.textContent = "Numero de tentativas: " + numberOfGuess; 
            msg3.textContent = "Numeros que tentou:  " + guessedNumber + " "; 
        }
        else {
            msg1.classList.add("winner");
            msg1.textContent = `Você acertou!`
            msg2.textContent = `O número é ${answer}`; 
            msg3.textContent = `Você precisou de ${numberOfGuess} tentativas para acertar`;
            document.getElementById("my_btn").disabled = true;
        }
    }
}