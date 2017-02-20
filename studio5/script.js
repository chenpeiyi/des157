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

    document.f.onsubmit = processForm;

    function processForm(){
      var score = 0;
      var petp = document.f.petp.checked;
      var million = document.f.million.checked;
      var pls = document.f.pls.checked;

      console.log("pet peeve "+ petp);
      console.log("pet peeve "+ petp);
      console.log("pet peeve "+ petp);


    }

});
