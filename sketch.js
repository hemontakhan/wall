var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(3600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(700,150,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background("black");  
 
  bullet.velocityX = speed;

  if (isCollide(bullet,wall)) {
      bullet.velocityX =0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (damage<10) {
          wall.shapeColor = color(255,0,0);
      }

      if (damage>10) {
          wall.shapeColor = color(0,255,0);
      }
   }


  drawSprites();
}

function isCollide(ob1,ob2){
  bulletRightEdge = ob1.x+ob1.width;
  wallLeftEdge = ob2.x;

 if(bulletRightEdge>=wallLeftEdge){
    return true;
 }
 
 else{
   return false;
 }

}