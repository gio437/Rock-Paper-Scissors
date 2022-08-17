// return the words "rock, paper, scissors"
// run through 1 iteration first
//test out this first cycle in the console before going on
//TO START OFF >
// create a data structure with the strings
//grab these strings
// write function to randomly grab one of these strings



function getComputerChoice(){
const arr1 = ["Rock", "Paper", "Scissors"];

const random = Math.floor(Math.random() * arr1.length);
console.log(random, arr1[random]);
}

getComputerChoice();


