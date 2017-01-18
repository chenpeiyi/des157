// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
}

function draw() {

  colorMode(HSB, 360, 100, 100);

  fill(mouseX, mouseY, 89, .5);

  noStroke();

  rect(pmouseX, pmouseY, 800 ,300);

}
