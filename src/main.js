function getComputerChoice(){
  //Calculate number between 1-100
  let choice = Math.floor(Math.random() * 100) + 1;
  
  //If number between 1 and 33, pick rock
  //Else if number between 34 and 66 pick paper
  //Else pick scissors (67-100)
  if(choice >= 1 && choice <= 33){
    return "rock";
  }else{
    if(choice > 33 && choice <= 66){
      return "paper";
    }else{
      return "scissors";
    }
  }
}

function playRound(playerInput){
  let humanChoice = playerInput;
  evalRound(humanChoice, getComputerChoice());
}

function evalRound(humanChoice, computerChoice){
  //If both players pick the same thing, it's a draw
  if(humanChoice == computerChoice){
    console.log(`It's a draw! Both players picked ${humanChoice}!`);
  }else{
  //If any of the winning combinations occur, you win
    if(
      (humanChoice == 'rock' && computerChoice == 'scissors') ||
      (humanChoice == 'paper' && computerChoice == 'rock') ||
      (humanChoice == 'scissors' && computerChoice == 'paper')
    ){
      setPlayerScore(getPlayerScore());
    //If you didn't win or tie, you lost
    }else{
      setComputerScore(getComputerScore());
    }
  }
}

function getPlayerScore(){
  return score = document.querySelector("#playerScore");
}

function setPlayerScore(playerScore){
  playerScore.textContent++;
}

function getComputerScore(){
  return score = document.querySelector("#computerScore");
}

function setComputerScore(computerScore){
  computerScore.textContent++;
}
