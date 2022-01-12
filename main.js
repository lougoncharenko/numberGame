//game values
let min=1;
    max=100;
    winningNum=Math.floor(Math.random() * 100) + 1,
    guessesLeft=10;


    //ui elements
const form=document.getElementById('game'),
    minNum=document.querySelector('.min-num'),
    maxNum=document.querySelector('.max-num'),
    guessInput= document.getElementById('guess-input'),
    guessBtn=document.getElementById('guess-btn');
    message=document.querySelector('.message');


    //assign UI min and Maz
    minNum.textContent=min;
    minNum.textContent=max;

    //create event listner
    guessBtn.addEventListener('click', function(){
        
        let guess=parseInt(guessInput.value);
        
        //validate input
        if(isNaN(guess) || guess<min || guess >max){
          setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        }
            
           //check if won
        if (guess=== winningNum){
            
            gameover(true, `${winningNum} is correct, YOU WIN!`);

        }else{
            //wrong number
            guessesLeft -= 1;

            if (guessesLeft ===0){
                gameover(false, `Game Over, the correct answer is ${winningNum}`);
                
            }else if (guess> winningNum){

                setMessage(`${guess} is too high, ${guessesLeft} guesses left`, 'red');
                guessInput.style.borderColor='red';

            } else if (guess<winningNum) {
                setMessage(`${guess} is too low, ${guessesLeft} guesses left`, 'red');
                guessInput.style.borderColor='red';
            }
        }
        
    })

    //gameover

    function gameover(won, msg){
        let color;
        won=== true? color='green': color='red';
        guessInput.disabled=true;
        //change border green
        guessInput.style.borderColor=color;
        //set message
        setMessage(msg);
        resetGame();

    }


    //set message
    function setMessage(msg, color){
        message.style.color=color;
        message.textContent=msg;
    }


    //reset game
    function resetGame(){
    resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    form.append(resetButton);
    resetButton.addEventListener('click', startOver);
    }

    function startOver(){
        resetButton.parentNode.removeChild(resetButton);
        randomNumber = Math.floor(Math.random() * 100) + 1;
        setMessage(`Game has restarted! Play again!`, 'green')
        guessInput.value=" ";
 
    }
    
  
  
          
  
  

