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
    var timeline = document.getElementById('timeline');
    var tag1 = document.getElementById('tag1');
    var firstCont = document.getElementById('firstCont');
    var elements = document.getElementsByClassName('closeButton');
    var asides = document.getElementsByTagName('aside');

    // add hover effect to all the squares
    firstSq.addEventListener('mouseover', brighter);

    function brighter() {
        timeline.style.opacity = '1';
        timeline.style.transition = 'opacity .5s ease';
        tag1.className = 'show'; // buggie
    }

    firstSq.addEventListener('mouseout', changeBack);

    function changeBack() {
        timeline.style.opacity = '.5';
    }

    secondSq.addEventListener('mouseover', brighter);

    function brighter() {
        timeline.style.opacity = '1';
    }

    secondSq.addEventListener('mouseout', changeBack);

    function changeBack() {
        timeline.style.opacity = '.5';
    }

    thirdSq.addEventListener('mouseover', brighter);

    function brighter() {
        timeline.style.opacity = '1';
    }

    thirdSq.addEventListener('mouseout', changeBack);

    function changeBack() {
        timeline.style.opacity = '.5';
    }

    fourthSq.addEventListener('mouseover', brighter);

    function brighter() {
        timeline.style.opacity = '1';
    }

    fourthSq.addEventListener('mouseout', changeBack);

    function changeBack() {
        timeline.style.opacity = '.5';
    }

    fifthSq.addEventListener('mouseover', brighter);

    function brighter() {
        timeline.style.opacity = '1';
    }

    fifthSq.addEventListener('mouseout', changeBack);

    function changeBack() {
        timeline.style.opacity = '.5';
    }

    sixthSq.addEventListener('mouseover', brighter);

    function brighter() {
        timeline.style.opacity = '1';
    }

    sixthSq.addEventListener('mouseout', changeBack);

    function changeBack() {
        timeline.style.opacity = '.5';
    }

    // loop throught all the asides, addEventListener to all
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', close);
    }

    // if any aside in the asides array is bring clicked, hide content
    function close() {
        console.log('activating close');
        for (var i = 0; i < asides.length; i++) {
            asides[i].className = 'hide';
        }
        console.log('aside: ' + asides[0].classList);
    }

    // show the content after clicking on the first square
    firstSq.addEventListener('click', show1ot);

    function show1ot() {
        firstCont.className = 'show';
    }

    secondSq.addEventListener('click', show2mt);

    function show2mt() {
        var secondCont = document.getElementById('secondCont');
        secondCont.className = 'show';
    }

    thirdSq.addEventListener('click', show3port);

    function show3port() {
        var thirdCont = document.getElementById('thirdCont');
        thirdCont.className = 'show';
    }

    fourthSq.addEventListener('click', show4letter);

    function show4letter() {
        var fourthCont = document.getElementById('fourthCont');
        fourthCont.className = 'show';
    }

    fifthSq.addEventListener('click', show52Cor);

    function show52Cor() {
        var fifthCont = document.getElementById('fifthCont');
        fifthCont.className = 'show';
    }

    sixthSq.addEventListener('click', show6john);

    function show6john() {
        var sixthCont = document.getElementById('sixthCont');
        sixthCont.className = 'show';
    }


    // attempt a loop for showing content
    /*
    var squares[]=["firstSq", "secondSq", "thirdSq", "fourthSq", "fifthSq", "sixthSq"];


    var firstCont = document.getElementById('firstCont');
    var secondCont = document.getElementById('secondCont');
    var thirdCont = document.getElementById('thirdCont');
    var fourthCont = document.getElementById('fourthCont');
    var fifthCont = document.getElementById('fifthCont');
    var sixthCont = document.getElementById('sixthCont');

    var content[] = [firstCont, secondCont, thirdCont, fourthCont, fifthCont, sixthCont];
    for (var i=0; i<squares.length; i++){
      squares[i].addEventListener('click', showWindow);
      function showWindow{
        content[i].className='show';
      }

    }
    */

    // pre load images
    var imgs = ["images/bgimg.jpg", "images/1-ot.jpg", "images/2-mt.jpg", "images/3-port.jpg", "images/4-letters.jpg", "images/5-2cor.jpg", "images/6-john.jpg", "images/timeline.png", "images/title.png", "images/tag1.png", ];

    // an empty array that holds the images as js objects
    var preload = [];

    // loop through the images array

    for (var i = 0; i < imgs.length; i++) {
        //create a new image at position i of the array
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }

});
