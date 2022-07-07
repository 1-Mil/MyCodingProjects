// x&y cords for ball
let ballX = 600
let ballY = 700
let ballDia=50

let baby
let furby

function preload() {
  dancingBaby = loadImage('dancingBaby.gif')
  furby = loadImage('furby.gif')
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200, 100, 100)
print(windowWidth)
imageMode(CENTER)
}


function draw(){
noCursor()
  if(mouseX > windowWidth/2){
    background(200,20,200)
  }else if{mouseY > windowHeight/2)
    background(200, 100, 100)
  }else{

  }{

  }

  ellipse(ballX,ballY,ballDia,ballDia)

if(mouseIsPressed == true){
ballX = windowWidth/2
ballY = windowHeight/2
ballDia = 200
rect(200, 500, 400, 150)

}else{
  ballX = 600
  ballY = 700
  ballDia = 50

}
}


function windowResized(){

  resizeCanvas(windowWidth,windowHeight)
}
