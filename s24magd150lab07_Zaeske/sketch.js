let eggs = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 400; i++) {
    eggs.push(new Easter()); //calls the functiont to create continous eggs
  }
}

function draw() {
  background(150, 190, 255);
  for (let i = 0; i < eggs.length; i++) {
    eggs[i].move(); 
    eggs[i].display();
  }
  push();
  fill(150, 75, 0);
  arc(200, 360, 180, 75, 100, PI + QUARTER_PI, CHORD);
  pop();
  push();
  fill(0);
  textSize(35);
  text('Easter!', 155, 370);
  pop();
}

class Easter { //The class that sets the egg shape, color, and speed so it can be called back later in the coding
  constructor() {
    this.x = random(width);
    this.y = random(-height, -50); 
    this.speed = random(1, 5); 
    this.c = color(random(255), random(255), random(255));
  }
  move() { //This makes it so the eggs fall at different speeds and restarts at the top
    this.y += this.speed; 
    if (this.y > height) { 
      this.y = random(-height, -50);
    }
  }
  display() { //Displays the eggs in random colors
    fill(this.c);
    ellipse(this.x, this.y, 20, 55);
  }
}