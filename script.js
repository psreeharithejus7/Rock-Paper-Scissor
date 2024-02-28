let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");  
const msg=document.querySelector("#msg"); 
const userScoreBoard=document.querySelector("#user-score");
const compScoreBoard=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*options.length);
    return options[index]; 
}

const drawGame=(user,comp)=>{
    msg.innerText="It's a Draw! Play Again";
    document.body.style.backgroundColor="white";
    console.log("It's a Draw!");
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        console.log( "You Win!") ;
        msg.innerText=`You Win ! Your ${userChoice} beats Computer ${compChoice}`;
        // msg.style.backgroundColor="green";
        document.body.style.backgroundColor="#90EE90";
        userScore++;
        userScoreBoard.innerHTML=`${userScore}`;
    }
    else{
        console.log("Computer Wins!");
        msg.innerText=`You Lose Computer ${compChoice} beats Your ${userChoice}`;
        // msg.style.color="red";
        document.body.style.backgroundColor="#FF7F7F";
        compScore++;
        compScoreBoard.innerHTML=`${compScore}`;
    }
}


const playGame=(userChoice)=>{
    console.log("user choice is ",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;

        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else
        {
           userWin=compChoice==="rock"?false:true;  
        }
        
        showWinner(userWin,userChoice,compChoice);
    }
  
     
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
       playGame(userChoice)
    }); 
});