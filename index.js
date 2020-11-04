var randomNumber1 = Math.floor(Math.random() * 6) + 1; // image 1 //Random Number between 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // image 1 //dice1.png - dice6.png 

var randomImageSource1 = "images/" + randomDiceImage1; // image 1 //images/dice1.png - images/dice6.png



var image1 = document.querySelectorAll("img")[0];  // image 1 random numbers
    image1.setAttribute("src", randomImageSource1);




var randomNumber2 = Math.floor(Math.random() * 6) + 1; // image 2 //Random Number between 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // image 2 //dice1.png - dice6.png 

var randomImageSource2= "images/" + randomDiceImage2; // image 2 //images/dice1.png - images/dice6.png


var image2 = document.querySelectorAll("img")[1]; // image 2 random numbers
image2.setAttribute("src", randomImageSource2);




if (randomNumber1 > randomNumber2){


    var headiing = document.querySelector("h1");
    headiing.innerHTML = "🚩Player 1 Wins!";

}


else if(randomNumber1 < randomNumber2) {


    var headiing = document.querySelector("h1");
    headiing.innerHTML = "Player 2 Wins!🚩";

}


else{
    var headiing=document.querySelector("h1");  
    headiing.innerHTML= " Draw";  
}
