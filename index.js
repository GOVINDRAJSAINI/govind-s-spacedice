var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImageSource = "dice" +randomNumber1+ ".png";
var randomImage = "images/" + randomImageSource;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);










var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/" +randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);


var randomNumber3 = Math.floor(Math.random()*6) + 1;
var randomImage3 = "dice"+randomNumber3+".png";
var randomImageSource3 = "images/" +randomImage3;
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src" , randomImageSource3);

var randomNumber4 = Math.floor(Math.random()*6) + 1;
var randomImage4 = "dice"+randomNumber4+".png";
var randomImageSource4 = "images/" +randomImage4;
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src" , randomImageSource4);