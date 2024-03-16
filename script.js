var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomDice1 + ".png";
var randomDiceSource1 = "images/" + randomDiceImage1;
var randomDiceImage2 = "dice" + randomDice2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSource2);

// Winner Decision
if(randomDice1 > randomDice2){
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if(randomDice1 < randomDice2){
    document.querySelector("h1").textContent = "Player 2 wins";
}
else{
    document.querySelector("h1").textContent = "Draw";
}








