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
    console.log(random, arr1[random]);
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
console.log(playRound(playerSelection, computerSelection));