
let xPos
let yPos
let ringX
let ringY

let sonic
let ring
let gameBackground

let score = 0
let timer = 60

let startGameBool = true
let endGameBool = false

let ringSound
let victory
let endScreenImage

function preload() {
  sonic = loadImage('sonic-running.gif')
  ring = loadImage ('3D-Ring.webp')
  gameBackground = loadImage('greenBg.jpg')
  ringSound = loadSound('SonicRing.mp3')
  victory = loadSound('victoryTheme.mp3')
  endScreenImage = loadImage('endScreen.gif')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)

  xPos = 0
  yPos = windowHeight/2

  ringX = random(windowWidth)
  ringY = random(windowHeight)

  setInterval(timeDown, 1000)
}

function timeDown(){
  if(timer > 0){
    timer--
  }
}

function draw() {
  if(startGameBool == true){
    startGame()
  }

  if(endGameBool == true){
    endGame()
  }


}

function startGame(){
  victoryStop()
  image(gameBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
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
    ringSound.play()
  }

  fill(255, 242, 0)
  textSize(40)
  text(" Rings Collected: " + score, windowWidth/2, 50)
  text(timer, 10, 50)

  if(timer == 0){
    startGameBool = false
    endGameBool = true
  }
}

function endGame(){
  background(0)
  image(endScreenImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  fill(246, 255, 0)
  text('congratulations you collected: '+score+' rings! press s to restart!', 10, 50 )
audioToggle()

}

function audioToggle(){
  if(!victory.isPlaying()){
    victory.loop()
  }
}

function victoryStop(){
  if(victory.isPlaying()){
    victory.stop()
  }
}

function keyPressed() {
if(endGameBool == true){
  if(key == 's'){
    score = 0
    timer=60
    endGameBool = false
    startGameBool= true
  }
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
