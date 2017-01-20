// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  background(255);
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  frameRate(5);

}

function draw() {
  colorMode(HSB, 360, 100, 100);
  fill(random(20, 200),random(70,72), 89, .2);
  noStroke();
  ellipse(mouseX, mouseY, random(50,400), random(100,400));

  if (mouseIsPressed){
    background(255);
  }

}