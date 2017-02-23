document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var imgs = ["images/light.png", "images/med.png", "images/dark.png", "images/friendship.png", ];

    // an empty array that holds the images as js objects
    var preload = [];

    // loop through the images array
    for (var i = 0; i < imgs.length; i++) {
        //create a new image at position i of the array
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
        calibrateX: true,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10.0,
        scalarY: 8.0,
        frictionX: 0.3,
        frictionY: 0.2,
        originX: 1,
        originY: 1,
    });
});
