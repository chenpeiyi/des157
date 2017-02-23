document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var imgs = [""];

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
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10.0,
        scalarY: 10.0,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5,
    });
/*
    document.f.onsubmit = processForm;

    function processForm() {
        var score = 0;
        var petp = document.f.petp.checked;
        var million = document.f.million.checked;
        var pls = document.f.pls.checked;

        console.log("pet peeve " + petp);
        console.log("million " + million);
        console.log("pls " + pls);


    }*/

});
