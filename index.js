//image1

var randomNumber1 = Math.random() * 6;    // creating a random number of range 6
randomNumber1 = Math.floor(randomNumber1) + 1; //rounding up with floor func
var randomDiceImage = "dice" + randomNumber1 + ".png"; //concatenating the name of image
var randomSourceImage = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];  //selecting the image using js
image1.setAttribute("src", randomSourceImage);


//image 2
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomSourceImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceImage2);

// to change the text when the user hits refresh button
if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else {
    document.querySelector("h1").innerHTML = "Its a draw";
}