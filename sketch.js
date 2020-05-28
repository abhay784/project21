var bullet,speed,weight;
var wall,thickness;
function setup() {
  height = 400;
  createCanvas(1600,height);
  bullet = createSprite(50, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;


}

function draw() {
  background(200,200,200);
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
  if( deformation<10){
    bullet.shapeColor = "green";
    
  }  
  if( deformation>10){
    bullet.shapeColor = "red";
    
  } 
} 
  
  drawSprites();
}
