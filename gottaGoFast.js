

let xPos;
let yPos;

let ySpeed = 2;
let xSpeed = 2;

let sonic;

let mouseDist

let score = 0

function preload() {
  sonic = loadImage('sonic-running.gif')
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  xPos = random(15, windowWidth-15)
  yPos = random(15, windowHeight-15)

textAlign(CENTER)
}

function draw() {
  background(7, 172, 237)

fill(255)
textSize(40)
text(" rings collected: " + score, windowWidth/2, 50)

mouseDist = dist(mouseX, mouseY, xPos, yPos)
print(mouseDist)

  image(sonic, xPos, yPos, 30, 30);
  xPos = xPos + xSpeed
  yPos = yPos + ySpeed

if(xPos >= windowWidth - 15|| xPos <=0){
xSpeed = xSpeed * -1
}

if(yPos >= windowHeight - 15 || yPos <=0){
ySpeed = ySpeed * -1
  }

if (mouseDist <= 15) {
xPos = random(15, windowWidth-15)
yPos = random(15, windowHeight-15)
score++
xSpeed = xSpeed * 1.2
ySpeed = ySpeed * 1.2
}

}

function windowsized(){

  resizeCanvas(windowWidth, windowHeight)
}
