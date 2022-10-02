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

let end = 0;


function getComputerChoice() {
    const arr1 = ["rock", "paper", "scissors"];
    
    const random = Math.floor(Math.random() * arr1.length);
    return arr1[random];
    }
    
    
    //top comment for button functions
    function changeRock() {
        if (end == 1){
            resetCounter();
        }
        playRound("rock", getComputerChoice()); //PASS THE PARAMETERS INTO THE FUNCTION GENUIS!!!
      }
    
    let rock = document.getElementById("rock");
    rock.addEventListener("click", changeRock);
    
    function changePaper() { 
        if (end == 1){
            resetCounter();
        }  
        playRound("paper", getComputerChoice());
    }
        
    let paper = document.getElementById("paper");
    paper.addEventListener("click", changePaper);
    
    function changeScissors() {
        if (end == 1){
            resetCounter();
        }
        playRound("scissors", getComputerChoice());
    }

    let scissors = document.getElementById("scissors");
    scissors.addEventListener("click", changeScissors);
   //bottom comment for button functions
    
 

function playRound(playerSelection, computerSelection) {
   
    console.log(playerSelection);
    console.log(computerSelection);

     if(playerSelection == "rock" && computerSelection == "scissors"){
        user++;
        checkGame();
        playerCounter(); //this adds users score on DOM
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        user++;
        checkGame();
        playerCounter();
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        user++;
        checkGame();
        playerCounter();
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computer++;
        checkGame();
        computerCounter();
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        computer++;
        checkGame();
        computerCounter();
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computer++;
        checkGame();
        computerCounter();
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        tie++;
        tieCounter();
    }
    else if(playerSelection == "rock" && computerSelection == "rock"){
        tie++;
        tieCounter();
    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        tie++;
        tieCounter();
    }
    console.log("user", user); 
    console.log("tie", tie); //maybe change these to dom? MAYBE CREATE ELEMENT?
    console.log("computer", computer);
 
    }

    

    function playerCounter() {
    
        let player = document.querySelector(".user");
        player.textContent = user;

    }

   function computerCounter() {
        
        let cpu = document.querySelector(".computer");
        cpu.textContent = computer;
   }

   function tieCounter() {
       
        let same = document.querySelector(".tie");
        same.textContent = tie;
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

function resultWin() {
  
    let result1 = document.querySelector(".result")

    let win = document.createElement("div");
    win.classList.add("end");
    win.textContent = "You Win!";

    result1.appendChild(win);

    console.log("You Win!");

    end++;
    }

 
function resultLose() {
    let result2 = document.querySelector(".result");

    let lose = document.createElement("div");
    lose.classList.add("end");
    lose.textContent = "Loser!";

    result2.appendChild(lose);

    console.log("Loser!");

    end++;
}

function checkGame() {

    if (user >= 3){
        user = 0;
        tie = 0;
        computer = 0;
        resultWin();

        let player = document.querySelector(".user");
        player.textContent = user;

        let cpu = document.querySelector(".computer");
        cpu.textContent = computer;

        let same = document.querySelector(".tie");
        same.textContent = tie;
    }

    else if (computer >= 3){
        user = 0;
        tie = 0;
        computer = 0;
        resultLose();

        let player = document.querySelector(".user");
        player.textContent = user;

        let cpu = document.querySelector(".computer");
        cpu.textContent = computer;

        let same = document.querySelector(".tie");
        same.textContent = tie;
    }
}


  function resetCounter() {
    end--;

    let result1 = document.querySelector(".end");
    result1.remove();

}