
/*
//game function:
-player must guess a number between min and max
-player gets a certain amount of guesses
-notify player of guesses remianing
-notify player of correct answer if they lise
-let player choose to play again

*/



//plan for the game
//initialize UI Variables
const form=document.getElementById('game');
const numberInput= document.getElementById('guess-input');
const submitBtn=document.getElementById('guess=btn');

const numberOfGuesses=document.getElementById('guesses');
const lastResult=document.getElementById('lastResult');
const lowOrHi=document.getElementById('lowOrHi');


//create a variable for the random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);

//create an event listener for submitting guess button
form.addEventListener('submit', checkGuess);


//create a check guess function with if, else statements and for loops
function checkGuess(e){
    e.preventDefault();
    let userGuess=numberInput.value
    let guesses=0;
    // console.log(userGuess)
    
        if (userGuess==randomNumber){
            lowOrHi.textContent="You've won'!"
            
        } else if(userGuess>randomNumber){
            guesses++;
            numberOfGuesses.textContent=guesses;
            lastResult.textContent=`Last guess: ${userGuess}`;
            lowOrHi.textContent="Your guess is too high!"
            
        } else if (userGuess<randomNumber){
            guesses++;
            numberOfGuesses.textContent=guesses;
           
             lastResult.textContent=`Last guess: ${userGuess}`;
            lowOrHi.textContent="Your guess is too low!"
           
        }
   
}




//create a function to reset game

