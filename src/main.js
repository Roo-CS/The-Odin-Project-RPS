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

function getHumanChoice(){
  let humanChoice;
  
  //Return answer to prompt turned to lower-case so it is not case sensitive
  return (
    humanChoice = prompt(
      "Enter rock, paper, or scissors: "
    ).toLowerCase()
  );
}

function playGame(){

  let humanScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; ++i){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
  }

  function playRound(humanChoice, computerChoice){
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
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        ++humanScore;
      //If you didn't win or, you lost
      }else{
        console.log(`You lost. ${humanChoice} is beaten by ${computerChoice}.`);
        ++computerScore;
      }
    }
  }
}

playGame();