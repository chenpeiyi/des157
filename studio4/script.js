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
