// reviewed processing and make an interactive banner
// as hover over, create random ellipses
// colors are of blue and orange tone, matching the style of the website
// right click to clear canvas

console.log("this is a js comment");

function setup() {  //set up canvas
  background(255);
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  frameRate(5);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  fill(random(20, 200),random(70,72), 89, .2);  // constrain color to blue-orange
  noStroke();
  ellipse(mouseX, mouseY, random(50,400), random(100,400)); // draw ellipses

  if (mouseIsPressed){    // start over if mouse is pressed
    background(255);
  }

}
