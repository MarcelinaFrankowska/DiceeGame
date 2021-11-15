
let player1= document.querySelector(".img1");
let player2= document.querySelector(".img2");
let dices= new Array("./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png");
let result=document.querySelector("h1");

drawNumber=()=>{
    console.log("kostka1")
    let randomNumber1= Math.floor(Math.random()*6);
    let randomNumber2= Math.floor(Math.random()*6);
    function whoWins(){
       randomNumber1>randomNumber2? result.innerText="Player 1 wins!":randomNumber1<randomNumber2?result.innerText="Player 2 wins!":result.innerText="It's draw"
     }
    player1.src=dices[randomNumber1];
    player2.src=dices[randomNumber2];
    whoWins()
}
window.addEventListener("click", drawNumber)
