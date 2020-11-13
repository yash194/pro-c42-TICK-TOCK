





function setup() {
  createCanvas(450,450);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {

 
  background(0);
  
  translate(200,200);
rotate(-90); 
let hr=hour();
let min=minute();
let sec=second();
strokeWeight(8);  
stroke("red");
  noFill();
 let hrAngle=map(hr,0,60,0,360);
 arc(0,0,300,300,0,hrAngle);
 stroke("yellow")
 let minAngle=map(min,0,60,0,360);
 arc(0,0,280,280,0,minAngle);
 stroke("green");
 let secAngle=map(sec,0,60,0,360);
 arc(0,0,260,260,0,secAngle);

 push();
 rotate(hrAngle)
stroke(255,0,0);
strokeWeight(7);
line(0,0,50,0)
pop();



push();
rotate(minAngle)
stroke(255,255,0);
strokeWeight(7);
line(0,0,90,0)
pop();


push();
rotate(secAngle)
stroke("green");
strokeWeight(7);
line(0,0,150,0)
pop();



  drawSprites();
}