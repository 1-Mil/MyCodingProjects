let lineBrushBool = false
let squareBrushBool = false
let ellipseBrushBool = false

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER)

  background(255);
}

function draw(){

  if(lineBrushBool == true){
    lineBrush()
  }

  if(squareBrushBool == true) {
    squareBrush()
  }
if(ellipseBrushBool == true)
    ellipseBrush()
}

function lineBrush() {

  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(255), random(255), random(255))

    line(pmouseX, pmouseY, mouseX, mouseY)
  }
}

function squareBrush() {
  if(mouseIsPressed){
    stroke(random(255), random(255), random(255))
    fill(random(255), random(255), random(255))
    rect(mouseX, mouseY, 50, 50)
  }

  function ellipseBrush() {

  }
}


function keyTyped(){

if (key === 'q'){
  lineBrushBool = true;
  squareBrushBool =  false;
}


if (key === 'a') {
  lineBrushBool = false;
  squareBrushBool = true;

}

if (key ==='s') {
  save('drawing.jpg')

}

}
