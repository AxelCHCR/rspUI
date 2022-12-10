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
