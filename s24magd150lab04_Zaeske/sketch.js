function setup() {
  createCanvas(400, 400);
  background(0);
  push();
fill(220, 150, 0);
rect(50, 75, 300, 50, 250, 50, 300, 40);
pop();
push();
fill(255, 0, 0);
triangle(75, 125, 325, 125, 200, 375);
pop();
}



function draw() {
//push(); //This for-loop function kept crashing my computer. 
//noStroke();
//strokeWeight(2);
//for (var x = 0; x > 75, x < 300; x += 20){
  //for (var y = 125; y >= 125; y += 0) {
  //fill(255);
  //ellipse(x, y, 25, 25);
//pop();



if (mouseIsPressed){
push();
fill(200,0,0);
ellipse(mouseX, mouseY, 25, 25)
pop();
}else{
}

if (keyIsPressed){
background(0);
push();
fill(255,255,0)
triangle(75,125,325,125,200,375)
pop();
} else {
}

if (keyIsPressed){
push();
fill(220,150,0);
rect(50,75,300,50,250,50,300,40);
pop();
}else{
}
    

}