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
    return arr1[random];
    }
    
   
    
function playRound(playerSelection, computerSelection){
     if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors"
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "Tie! Try again"
    }
        else if(playerSelection == "rock" && computerSelection == "rock"){
            return "Tie! Try again"
    }
        else if(playerSelection == "paper" && computerSelection == "paper"){
            return "Tie! Try again"
    }
   
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






function counter(){
    let user = 0;
    let tie = 0;
    let computer = 0;
    

    for (let i = 0; i < 5; ++i){
    outcome = playRound(window.prompt(), getComputerChoice());
    if (outcome === "You Win! Rock beats Scissors"){
    console.log(outcome);
    user++;
   }
   else if (outcome === "You Win! Paper beats Rock"){
    console.log(outcome);
    user++
   }
   else if (outcome === "You Win! Scissors beats Paper"){
    console.log(outcome);
    user++
   }
   else if (outcome === "You Lose! Rock beats Scissors"){
    console.log(outcome);
    computer++
   }
   else if (outcome === "You Lose! Paper beats Rock"){
    console.log(outcome);
    computer++
   }
   else if (outcome === "You Lose! Scissors beats Paper"){
    console.log(outcome);
    computer++;
   }
   else if (outcome === "Tie! Try again"){
    console.log(outcome);
    tie++;
    i--;
   }
   else if (outcome === undefined){
    console.log("input again");
    i--;
   }
    if (user >= 3){
    console.log("Winner!");
    break;
}
    else if (computer >= 3){
    console.log("Loser!");
    break;
   }
}
  

   console.log("user", user); 
   console.log("tie", tie);
   console.log("computer", computer);;
 
   
   if (user > computer || user >= 3){
    console.log("Winner!");
   }
   else if (computer > user || computer >= 3){
    console.log("Loser!");
   }

}


counter();

