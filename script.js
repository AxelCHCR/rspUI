let victories = 0;
let loses = 0;
let draws = 0;
const possiblePlays = ["rock", "paper", "scissors"];
function unableButtons(){
    let rock = document.querySelector("#rock");
    let scissors = document.querySelector("#scissors");
    let paper = document.querySelector("#paper");
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
}
function updateValue(win, lose, tie){
    let victories = document.querySelector("#victories");
    let loses = document.querySelector("#loses");
    let draws = document.querySelector("#draws");
    victories.textContent = `Victories: ${win}`;
    loses.textContent = `Loses: ${lose}`;
    draws.textContent = `Draws: ${tie}`;
    let gameOver = document.querySelector("#gameOver");
    if(win == 5){
        gameOver.textContent = "Player wins this game!";
        unableButtons();
    }
    if(lose == 5){
        gameOver.textContent = "Computer wins this game!";
        unableButtons();
    }
}
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
rock.addEventListener("click", ()=>{
    playRound("rock", computerPlay(possiblePlays), possiblePlays);
});
scissors.addEventListener("click", ()=>{
    playRound("scissors", computerPlay(possiblePlays), possiblePlays);
});
paper.addEventListener("click", ()=>{
    playRound("paper", computerPlay(possiblePlays), possiblePlays);
});
function computerPlay(plays){
    let index = Math.floor(Math.random()*2);
    return plays[index];
}
function playRound(playerSelection, computerSelection, plays){
    let round = document.querySelector("#round");
    if (playerSelection == computerSelection){
        draws++;
        round.innerHTML = `It's a Draw! Both players played ${playerSelection}!`;
    }
    else if(plays.indexOf(playerSelection) == (plays.indexOf(computerSelection)-1) || (plays.indexOf(playerSelection)== 2 & plays.indexOf(computerSelection)==0)){
        loses++;
        round.innerHTML = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    }
    else{
        victories++;
        round.innerHTML = `Player wins! ${playerSelection} beats ${computerSelection}.`;
    }
    updateValue(victories, loses, draws);
}
/*function game(){
    alert("Welcome to Rock - Scissors - Paper!");
    alert("You're going to play against computer. ");
    alert("Let's start!");

    var results = "";
    for(let i = 0; i < 5; i++){
        while(true){
            var playerChoice = (prompt("Select and item(rock, scissors, paper): ").toLowerCase()).replaceAll(' ', ''); 
            if(possiblePlays.includes(playerChoice)){
                break;
            }
            else{
                alert("Invalid data, try again.");
            }
        }
        results += `${playRound(playerChoice, computerPlay(possiblePlays), possiblePlays)} \n`;
    }
    if(victories > loses){
        return `Player wins! \nResults: \n${results}`;
    }
    else if(loses > victories){
        return `Computer wins! \nResults: \n${results}`;
    }
    else if (victories == loses){
        return `It was a draw! \nResults: \n${results}`;
    }
}
console.log(game());*/
