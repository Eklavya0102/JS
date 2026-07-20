let userScore=0;
let computerScore=0;

let choise = document.querySelectorAll(".option");
let message = document.querySelector("#msg");
let msg_container = document.querySelector(".message-cont");
let user_Score= document.querySelector(".score-you");
let computer_Score=document.querySelector(".score-computer");


const genComputerChoice = ()=> {
    const options_avl=["rock", "paper", "scissors"];
    let computer_choice= Math.floor(Math.random()*3);
    return options_avl[computer_choice];
}

const drawGame = () =>{
    message.innerText="Draw !"
    msg_container.style.backgroundColor="orange";
};

const winner= (userWin)=>{
    if(userWin){
        message.innerText="You Win !"
        msg_container.style.backgroundColor="green";
        userScore++;
        user_Score.innerText=userScore;
    }else{
        message.innerText="You Loose !"
        msg_container.style.backgroundColor="red";
        computerScore++;
        computer_Score.innerText=computerScore;
    }
}

const playgame= (userChoise)=> {
    const computerChoice = genComputerChoice();

    if(userChoise==computerChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoise== "rock"){
            userWin = computerChoice =='paper' ? false : true;
        }else if(computerChoice== "paper"){
            userWin = computerChoice == "scissors"? false : true;
        }else{
            userWin = computerChoice === "rock" ? false : true ;
        }
        winner(userWin);
    }

};

choise.forEach((option)=>{
    option.addEventListener('click',()=>{
        let userChoise=option.getAttribute("id");
        playgame(userChoise);
    });

});