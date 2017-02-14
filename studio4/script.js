document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var imgs = ["images/car.png", "images/car_blue.png", "images/roof.png", "images/roof2.png", "images/roof_green.png", "images/roof_pink.png", "images/housebod.png", "images/housebodem.png", "images/housebod_green.png", "images/housebod_pink.png", "images/girl.png", "images/girl_org.png"];

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

    var carC = document.getElementById('carC');

    var carTip = document.getElementById('carTip');
    var funeralTip = document.getElementById('funeralTip');
    var girlTip = document.getElementById('girlTip');
    var houseTip = document.getElementById('houseTip');
    var tipTimer;


    var cardiv = document.getElementById('cardiv');
    var funeraldiv = document.getElementById('funeraldiv');
    var girldiv = document.getElementById('girldiv');
    var housediv = document.getElementById('housediv');


    var divs = [cardiv, funeraldiv, girldiv, housediv];
    var pics = ['car', 'roof1', 'roof2', 'bod1', 'girl', 'roof2', 'bod2'];


    // change pic functions
    cardiv.addEventListener('mouseover', changePic1);

    function changePic1() {
        carC.style.opacity = 1;
        console.log("changing car");
        tipTimer = setTimeout(showCarTip, 1500);
        console.log("showing car tip")
    }

    bod1.addEventListener('mouseover', changePic2);

    function changePic2() {
        roof1.src = "images/roof_pink.png";
        bod1.src = "images/housebod_pink.png";
        tipTimer = setTimeout(showFuneralTip, 1500);
        console.log("changing house1 funeral");
    }

    girl.addEventListener('mouseover', changePic3);

    function changePic3() {
        girl.src = "images/girl_org.png";
        tipTimer = setTimeout(showGirlTip, 1500);
        console.log("changing girl");
    }

    bod2.addEventListener('mouseover', changePic4);

    function changePic4() {
        roof2.src = "images/roof_green.png";
        bod2.src = "images/housebod_green.png";
        tipTimer = setTimeout(showHouseTip, 1500);
        console.log("changing house2 empty");
    }

    /*
        for (var i = 0; i < pics.length; i++){
          pics[i].addEventListener('mouseover', function(){ //addEventListener is not a function !?!??!?
          console.log(pics[i]);
          console.log("mouseover");
        })}

        */

    cardiv.addEventListener('mouseout', function() {
        console.log('mouseout on Car');
        clearTimeout(tipTimer);
        carTip.style.opacity = 0;
    });

    function showCarTip() {
        carTip.style.opacity = 1;
        carTip.style.transition = 'all .5s';
    }


    girl.addEventListener('mouseout', function() {
        console.log('mouseout on girl');
        clearTimeout(tipTimer);
        girlTip.style.opacity = 0;
    });

    function showGirlTip() {
        girlTip.style.opacity = 1;
        girlTip.style.transition = 'all .5s';
    }

    bod2.addEventListener('mouseout', function() {
        console.log('mouseout on house2');
        clearTimeout(tipTimer);
        houseTip.style.opacity = 0;
    });

    function showHouseTip() {
        houseTip.style.opacity = 1;
        houseTip.style.transition = 'all .5s';
    }

    bod1.addEventListener('mouseout', function() {
        console.log('mouseout on house1');
        clearTimeout(tipTimer);
        funeralTip.style.opacity = 0;
    });

    function showFuneralTip() {
        funeralTip.style.opacity = 1;
        funeralTip.style.transition = 'all .5s';
    }

    // animation starts
    cardiv.addEventListener('click', function() {
        carAnim = requestAnimationFrame(moveCar);
    });

    var carNewLeft = 353;

    function moveCar() {
        console.log('moving car');
        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log('w: ' + w + ', h: ' + h);
        carNewLeft++;
        carC.style.left = carNewLeft + 'px';
        console.log('newLeft: ' + carNewLeft);
        carAnim = requestAnimationFrame(moveCar);

        if (carNewLeft == w - 500){
          carNewLeft --;
        }
    }

    bod1.addEventListener('click', function() {
        house1Anim = requestAnimationFrame(moveHouse1);
    });

    var roof1top = 285;
    var bod1top = 383;

    function moveHouse1(){
        console.log('moving house1');
        var w = window.innerWidth;
        var h = window.innerHeight;
        roof1.style.top = roof1top + 'px';
        roof1top = roof1top - 5;
        house1Anim = requestAnimationFrame(moveHouse1);
    }

});
