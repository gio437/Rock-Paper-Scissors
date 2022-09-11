// return the words "rock, paper, scissors"
// run through 1 iteration first
//test out this first cycle in the console before going on
//    <TO START OFF >
// create a data structure with the strings
//grab these strings
// write function to randomly grab one of these strings

//part 2
//function with (two parameters)
//grab a random value from the computer
// grab the value inputed by the user
// input logic to that determines who wins
// return the winner
//input the function getComputerChoice in for computerSelection

let user = 0;
let tie = 0;
let computer = 0;


function getComputerChoice() {
    const arr1 = ["rock", "paper", "scissors"];
    
    const random = Math.floor(Math.random() * arr1.length);
    return arr1[random];
    }
    
    
    //top comment for button functions
    function changePaper() {    //PASS THE PARAMETERS INTO THE FUNCTION GENUIS!!!
        playerSelection = "paper"; 
        playRound("paper", getComputerChoice());
    }
        
    let paper = document.getElementById("paper");
    paper.addEventListener("click", changePaper);
    
    function changeScissors() {
        playRound("scissors", getComputerChoice());
    }

    let scissors = document.getElementById("scissors");
    scissors.addEventListener("click", changeScissors);
    

    function changeRock() {
    playRound("rock", getComputerChoice());
  }

   let rock = document.getElementById("rock");
   rock.addEventListener("click", changeRock);
   //bottom comment for button functions
    
 

function playRound(playerSelection, computerSelection) {
   
    console.log(playerSelection);
    console.log(computerSelection);

     if(playerSelection == "rock" && computerSelection == "scissors"){
        user++;
        checkGame();
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        user++;
        checkGame();
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        user++;
        checkGame();
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computer++;
        checkGame();
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        computer++;
        checkGame();
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computer++;
        checkGame();
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        tie++;
    }
    else if(playerSelection == "rock" && computerSelection == "rock"){
        tie++;
    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        tie++;
    }
    console.log("user", user); 
    console.log("tie", tie);
    console.log("computer", computer);
 
    }



//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));



// need to write a function that plays the game five times order and displays the results

// write a loop that will iterate 5 times
//integrate function playRound into the loop
//call/console log the game function which will display function playRound results 5x
// you need to define playRound
//write to keep score
//push to array when i win/lose
//have two arrays and output the score for winner and loser

//rps-ui =>

// get players choice -function
// get computers choice -function
// compare the choices -function
// update score, aka pass result of compare -function
// check game over -function
// if not, nextRound -function
// if gamer over, nextGame -function




 
function checkGame() {
    if (user >= 3){
       console.log("Winner!");
       resetGame();
    }
    else if (computer >= 3){
        console.log("Loser!");
        resetGame();
    }
}


function resetGame() {
    user = 0;
    tie = 0;
    computer = 0;
}


