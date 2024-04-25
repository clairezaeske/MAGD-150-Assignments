var lineY 
var rectX, rectY;
var circleX, circleY;
var rectSize = 30;
var circleSize = 30;
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  lineY = 55 / 2; 
  rectColor = color(0);
  rectHighlight = color(51);
  circleColor = color(255);
  circleHighlight = color(204);
  baseColor = color(102);
  currentColor = baseColor;
  circleX = 195;
  circleY = 315; 
  rectX = 180;
  rectY = 350;
  ellipseMode(CENTER);
}
function draw() {
  update(mouseX, mouseY);
  background(255);
  
  push();
  fill(150);
  rect(50,50,300,200);
  pop();
  push();
  fill(currentColor);
  rect(55,55,290,190);
  pop();
  
  push();
  line(55, lineY,345, lineY);
  lineY -=0.5;
  if (lineY < 55) {
    lineY = 240;
  }
  pop();
  
  push();
  fill(100);
  rect(170, 290, 50, 350);
  pop();


    if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  stroke(255);
  rect(rectX, rectY, rectSize, rectSize);
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  
  text("ON",186,319);
  text("OFF",182.5,370);

}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = circleColor;
  }
  if (rectOver) {
    currentColor = rectColor;
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
  
}