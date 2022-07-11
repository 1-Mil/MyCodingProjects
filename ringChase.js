
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
    yPos = windowWidth
}

function draw() {
image(background, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
image(sonic, xPos, 200, 200)


}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    yPos -= 1;
  } else if (keyCode === DOWN_ARROW) {
    yPos += 1;
  }
}
