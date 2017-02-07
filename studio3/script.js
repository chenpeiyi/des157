// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture the img element by its id into a variable
    var firstSq = document.getElementById('firstSq');
    var secondSq = document.getElementById('secondSq');
    var thirdSq = document.getElementById('thirdSq');
    var fourthSq = document.getElementById('fourthSq');
    var fifthSq = document.getElementById('fifthSq');
    var sixthSq = document.getElementById('sixthSq');

/*
    var closeButton = document.getElementsByClassName('closeButton');

    closeButton.addEventListener('click', myFunction(){
      var firstCont = document.getElementById('firstCont');
      firstCont.className='hide';
    });
*/
    // add an eventListener for mouseover that changes the src of the
    firstSq.addEventListener('click', show1ot);
    function show1ot(){
      var firstCont = document.getElementById('firstCont');
      firstCont.className = 'show';
    }

    function changeToLove(){
      heart.src="images/love.png";
    }

    heart.addEventListener('mouseout', changeBack);

    function changeBack(){
      heart.src="images/question.png"
    }

    var imgs=["images/bgimg.jpg", "images/1-ot.jpg", "images/2-mt.jpg", "images/3-port.jpg", "images/4-letters.jpg", "images/5-2cor.jpg", "images/6-john.jpg", "images/timeline.png", "images/title.png"];

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
