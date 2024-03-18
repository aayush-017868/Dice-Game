//Substitute the names from the form
    var player1 = document.getElementById
    ('player1');
    var player2 = document.getElementById
    ('player2');
   //Taking player names from the form
   player1.textContent = new URLSearchParams(window.location.search).get('player1');
   player2.textContent = new URLSearchParams(window.location.search).get('player2');

function playGame(){
     
    /*Creating randomDice1 and randomDice2 variables which will generate random numbers from 1 to 6 */
    var randomDice1 = Math.floor(Math.random() * 6) + 1;
    var randomDice2 = Math.floor(Math.random() * 6) + 1;
    /*According to those random variables, we will get the images set using setAttribute function */
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
        document.getElementById('header').textContent = player1.textContent+ ' wins';
    }
    else if(randomDice1 < randomDice2){
        document.getElementById('header').textContent = player2.textContent+' wins';
    }
    else{
        document.getElementById('header').textContent = "Draw!";
    }
}

function refresh(){
    location.reload();
}

