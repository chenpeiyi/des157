document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var imgs = ["images/#"];

    // an empty array that holds the images as js objects
    var preload = [];

    // loop through the images array

    for (var i = 0; i < imgs.length; i++) {
        //create a new image at position i of the array
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }

    var car = document.getElementById('car');
    var roof1 = document.getElementById('roof1');
    var bod1 = document.getElementById('bod1');
    var girl = document.getElementById('girl');
    var roof2 = document.getElementById('roof2');
    var bod2 = document.getElementById('bod2');

    var pics = [car, roof1, roof2, bod1, girl, roof2, bod2];
