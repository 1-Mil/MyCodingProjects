
let xPos
let yPos

let sonic
let ring
let background
let score = 0

function preload() {
  sonic = loadImage('sonic-running.gif')
  ring = loadImage ('ring-sonic.gif')
  background = loadImage('greenBg.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)

  xPos = 0
  yPos = windowHeight/2
}

function draw() {
  image(background, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
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
}

// function keyIsDown() {
//   if (keyCode === UP_ARROW) {
//     yPos -= 1;
//     print("up arrow")
//   } else if (keyCode === DOWN_ARROW) {
//     yPos += 1;
//   }
// }
