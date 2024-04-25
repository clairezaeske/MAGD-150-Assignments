function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,100);
  
  push();
  fill('#58B9C4');
  arc(270,70,150,150,0, PI + QUARTER_PI, CHORD);
  pop();
  push();
  colorMode(HSB);
  fill(50,100,100);
  quad(50,62,86,50,50,38,14,50);
  quad(50,14,38,50,50,86,62,50);
  pop();
  
  push();
  fill('#E70D0D');
  triangle(120,220,150,180,180,220);
  pop();
  push();
  fill(160);
  quad(120,220,180,220,180,330,120,330);
  pop();
  push();
  fill(200,100,0);
  quad(150,330,165,360,150,390,135,360);
  pop();
}