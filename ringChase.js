
let xPos
let yPos
let ringX
let ringY

let sonic
let ring
let background

let score = 0

function preload() {
  sonic = loadImage('sonic-running.gif')
  ring = loadImage ('3D-Ring.webp')
  background = loadImage('greenBg.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)

  xPos = 0
  yPos = windowHeight/2

  ringX = random(windowWidth)
  ringY = random(windowHeight)
}

function draw() {
  image(background, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(ring, ringX, ringY, 50, 40)
  image(sonic, xPos, yPos, 50,50)
  if(keyIsDown( UP_ARROW)){
    yPos -= 5;
  }
  if(keyIsDown( DOWN_ARROW)){
    yPos += 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    xPos -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xPos += 5;
  }

  if(dist(xPos, yPos, ringX, ringY)<25){
    ringX = random(windowWidth)
    ringY = random(windowHeight)
    score++
  }

  fill(255, 242, 0)
  textSize(40)
  text(" rings collected: " + score, windowWidth/2, 50)
}

// function keyIsDown() {
//   if (keyCode === UP_ARROW) {
//     yPos -= 1;
//     print("up arrow")
//   } else if (keyCode === DOWN_ARROW) {
//     yPos += 1;
//   }
// }
