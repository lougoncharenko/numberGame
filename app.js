
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

//initialize reset button
let resetButton;


//create a variable for the random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);

//create an event listener for submitting guess button
form.addEventListener('submit', checkGuess);


//create a check guess function with if, else statements and for loops
function checkGuess(e){
    e.preventDefault();
    let userGuess=numberInput.value
    let guesses=1;
    
    // console.log(userGuess)
       
      if (userGuess==randomNumber){
            lowOrHi.textContent="You've won'!"
            gameOver();
        } else if(guesses===10){
            lowOrHi.textContent="Game Over"
            gameOver();
        }
        else if(userGuess>randomNumber){
            
            numberOfGuesses.textContent=guesses;
            lastResult.textContent=`Last guess: ${userGuess}`;
            lowOrHi.textContent="Your guess is too high!"
            
        } else {
            
            numberOfGuesses.textContent=guesses;
           
             lastResult.textContent=`Last guess: ${userGuess}`;
            lowOrHi.textContent="Your guess is too low!"
           
        }
        guesses++;
   
}

function gameOver(){
   
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  form.append(resetButton);
  resetButton.addEventListener('click', resetGame);

} 
        

//create a function to reset game
function resetGame(){
    resetButton.parentNode.removeChild(resetButton);
    numberInput=" ";
    randomNumber = Math.floor(Math.random() * 100) + 1;

}
