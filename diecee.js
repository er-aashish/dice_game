// Image1 -- generate number and change image
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//image 2 -- generate number and change image
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)

//heading - winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = '<i class="fas fa-trophy trop"></i> Player 1 wins';
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = '<i class="fas fa-trophy trop"></i> Player 2 wins';
}else{
    document.querySelector("h1").innerHTML = "Draw";
}
