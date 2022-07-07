function setup() {
  createCanvas(400, 400);
}


function draw(){
background(255);
 
  fill (250,27,2);
  
  stroke(1)
  ellipse(200, 200, 50, 10)
  
  ellipse(198,60,50,30)
  
  strokeWeight(4)
  stroke(0)
  line(175,200,173,60)
  
  strokeWeight(4)
  stroke(0)
  line(225,200,223,60)
  
 strokeWeight(4)
  stroke(0)
  triangle(240, 75, 200, 20, 156, 75)
  
  //       (left    |  top|    right)
  triangle(99, 230, 173, 80, 173, 200)
  
  triangle(227,199, 225, 80, 303, 229)
  
  line(200, 200, 200, 275)
}
