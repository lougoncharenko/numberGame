//game values
let min=1;
    max=10;
    winningNum=2,
    guessesLeft=3;


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
            //disable inout
            guessInput.disabled=true;
            //change border green
            guessInput.style.borderColor='green';
            //let user know they've won
            setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

        }
        
    })


    //set message
    function setMessage(msg, color){
        message.style.color=color;
        message.textContent=msg;
    }

