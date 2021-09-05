const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0


var bg,bgImg;
var p1,p2,p3,p4,p5
var ice1,ice2
var p1_img,p2_img,p3_img,p4_img,p5_img
var ice1_img,ice2_img

function preload(){
  p1_img=loadImage("p1.png")
  p2_img=loadImage("p2.png")
  p3_img=loadImage("p3.png")
  p4_img=loadImage("p4.png")
  //p5_img=loadImage("p5.png")
  //ice1_img=loadImage("ice1.jpg")
 // ice2_img=loadImage("ice2.jpg")
bgImg=loadImage("bg.jpg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
p_1=new Pu1 (displayWidth -930,displayHeight -310,20,20)
//sling1 = new Sling(p_1.body,{x:430, y:460});

p_2=new Pu2 (displayWidth-450,displayHeight-300,20,20)
sling2 = new Sling(p_2.body,{x:913, y:468});

p_3=new Pu3 (displayWidth-920,displayHeight-580,20,20)
sling3 = new Sling(p_3.body,{x:450, y:184});

p_4=new Pu4 (displayWidth-400,displayHeight-580,20,20)
sling4 = new Sling(p_4.body,{x:950, y:190});

ice1=new Ice (displayWidth-800,displayHeight-450)
ice2=new Ice (displayWidth-550,displayHeight-450)
 




//creating the player sprite
/*player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
*/

}

function draw() {
  
  background(bgImg); 

  noStroke();
        textSize(35)
        fill("black")
        text("Score  " + score, width-250, 50)





p_1.display()
p_2.display()
p_3.display()
p_4.display()

//sling1.display()
sling2.display()
sling3.display()
sling4.display()

ice1.display()
ice1.score()
ice2.display()
ice2.score()
  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
 player.y = player.y-30
}

if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
*/

drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(p_1.body, {x: mouseX , y: mouseY});
 //Matter.Body.setPosition(p_2.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  //sling1.fly();
  sling2.fly();
  sling3.fly();
  sling4.fly();
}






