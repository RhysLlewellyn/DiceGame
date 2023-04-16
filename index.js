var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImage1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png-dice6.png
var randomImage2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png-dice6.png

var image1 = document.querySelectorAll(".img1")[0].setAttribute("src",randomImage1);
var image2 = document.querySelectorAll(".img2")[0].setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML="🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML="Player 2 Wins! 🚩";
} else {
    document.querySelector(".container h1").innerHTML="Draw!";
}


