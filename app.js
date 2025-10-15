let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

// function to generate computer choice

const gencompchoice =() =>{
    const options = ["rock","paper","scissors"];
    // generate random  rock paper scissors
    const randIdx = Math.floor(Math.random () * 3); // generates random number between 0 to 2
    return  options[randIdx]; // returns the computer choice

};

const drawgame = () =>{
    // console.log("game is a draw");
    msg.innerHTML = "It's a Draw. Try Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin){
        userScore++;    
        userScorepara.innerText = userScore;
        // console.log("user wins");
        msg.innerHTML = `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("computer wins");
        msg.innerHTML = `You Lose!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
 

const playgame = (userchoice) => {
    // console.log("user choice =",userchoice);
    // generate computer choice  // modular way of programming means breaking a big problem into smaller problems
    const compchoice = gencompchoice();
    // console.log("computer choice =",compchoice);

    if (userchoice === compchoice)
    {
        // draw game // tie
        drawgame();
    }
    else 
    {
        // win or lose
        let userwin = true;
        if (userchoice === "rock"){
            // scissors or paper
           userwin = compchoice === "paper" ? false : true;

        }
        else if (userchoice === "paper"){
           // rock or scissors
           userwin = compchoice === "scissors" ? false : true;
        }
        else {
            //rock or paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);   // to check if the choice is being selected
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice); // to check if the click is being registered
        playgame(userchoice);
    });
});