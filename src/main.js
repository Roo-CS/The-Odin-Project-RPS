function getComputerChoice(){
  let choice = Math.floor(Math.random() * 100) + 1;
  console.log(choice);
  if(choice >= 1 && choice <= 33){
    return "Rock";
  }else{
    if(choice > 33 && choice <= 66){
      return "Paper";
    }else{
      return "Scissors";
    }
  }
}

console.log(getComputerChoice());