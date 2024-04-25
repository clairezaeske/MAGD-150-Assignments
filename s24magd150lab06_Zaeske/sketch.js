var posX=200;
var posY = 324;
var ballDiameter = 40;
var velocityY=0.0;
var gravity = 1.5; 
var onGround = false; 
var jumpSize = -20; 
var c;
let x = 0;
let y = 0;
let dim = 150.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  colorize();
  
  function colorize(){ //The code is making the bar above the ball randomize in color between black, white, and grey
  c= round(random(250));
  } 
  push();
  fill(0,200,0);
  rect(0,325,400,400);
  pop();
  
  push();
  fill(c); 
  rect(125,115,145,45);
  scale(0.5);
  rect(125,115,145,45);
  pop();
  
  push();
  colorMode(HSB);
  rotate(0.12);
  fill(50,100,100);
  quad(350,62,314,50,350,38,386,50);
  quad(350,14,362,50,350,86,338,50);
  pop();
  
   line(0,325, width, 325); 
  update();
  print (velocityY + "and onground is" + onGround);
  
  x = x + 0.8;
  if (x > 400 + dim) {
    x = -dim;
}
  translate(x, 50 / 2 - dim / 2); //creates a rectangle, cloud, that slowly moves across the screen
  fill(255);
  rect(-dim / 2, -dim / 2, dim, dim);

}


function update(){
  
  velocityY = gravity + velocityY;
  posY= velocityY + posY;
  
  if (posY +(ballDiameter/2) >= (324)){ //the placement of the ball on screen
    posY= (324)- (ballDiameter/2);
    onGround = true;
  } else {
    onGround = false;
  }

  for (let x=1; x<10; x++){
    fill(200,0,0);
    circle(posX,posY,50);
   }
}

function mousePressed(){ //when the mouse is pressed, the ball bounches upward, only if the ball is on the ground first
  if (onGround){
    jump();
  }
}

function jump(){
  velocityY = jumpSize;


}