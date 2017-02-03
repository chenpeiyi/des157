// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture the img element by its id into a variable
    var heart = document.getElementById('heart');

    // add an eventListener for mouseover that changes the src of the
    // heart image to the image titled "love.png"
    heart.addEventListener('mouseover', changeToLove);

    function changeToLove(){
      heart.src="images/love.png";
    }

    heart.addEventListener('mouseout', changeBack);

    function changeBack(){
      heart.src="images/question.png"
    }

    var imgs=["images/bgimg", "images/1-ot.png", "images/2-mt.png", "images/3-port.png", "images/4-letters.png", "images/5-2cor.png", "images/6-john.png"];

    // an empty array that holds the images as js objects
    var preload=[];

    // loop through the images array

    for(var i=0; i<imgs.length; i++){
      //create a new image at position i of the array
      preload[i] = new Image();
      preload[i].src = imgs[i];
      console.log(preload[i]);
    }

});
