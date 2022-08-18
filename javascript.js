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

function getComputerChoice(){
    const arr1 = ["rock", "paper", "scissors"];
    
    const random = Math.floor(Math.random() * arr1.length);
    return random, arr1[random];
    }
    
   
    
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection == "rock" && computerSelection == "rock"){
        return "Tie! Try Again"
    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        return "Tie! Try again"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats scissors"
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "Tie! Try again!"
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

console.log("break");


// need to write a function that plays the game five times order and displays the results

// write a loop that will iterate 5 times
//integrate function playRound into the loop
//call/console log the game function which will display function playRound results 5x
// you need to define playRound
//write to keep score
//push to array when i win/lose
//have two arrays and output the score for winner and loser

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(window.prompt(), getComputerChoice()));
        console.log("User",window.prompt(), "Computer", getComputerChoice());
    }
    
}

game();

