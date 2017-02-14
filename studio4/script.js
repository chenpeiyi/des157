document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var imgs = ["images/car.png","images/car_blue.png", "images/roof.png", "images/roof_green.png", "images/roof_pink.png", "images/housebod.png", "images/housebodem.png",  "images/housebod_green.png", "images/housebod_pink.png", "images/girl.png", "images/girl_org.png"];

    // an empty array that holds the images as js objects
    var preload = [];

    // loop through the images array

    for (var i = 0; i < imgs.length; i++) {
        //create a new image at position i of the array
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }


    var pictures = document.getElementsByTagName('img');

    var car = document.getElementById('car');
    var roof1 = document.getElementById('roof1');
    var bod1 = document.getElementById('bod1');
    var girl = document.getElementById('girl');
    var roof2 = document.getElementById('roof2');
    var bod2 = document.getElementById('bod2');

    var cardiv = document.getElementById('cardiv');
    var funeraldiv = document.getElementById('funeraldiv');
    var girldiv = document.getElementById('girldiv');
    var housediv = document.getElementById('housediv');

    var divs = [cardiv, funeraldiv, girldiv, housediv];
    var pics = ['car', 'roof1', 'roof2', 'bod1', 'girl', 'roof2', 'bod2'];
/*
    for (var i = 0; i < pics.length; i++){
      pics[i].addEventListener('mouseover', function(){ //addEventListener is not a function !?!??!?
      console.log(pics[i]);
      console.log("mouseover");
    })}

    */

    


  });
