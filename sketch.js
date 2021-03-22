const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg
var backgroundImg = "sprites/GamingBackground.png";

function preload() {
//preload the images here

}

function setup() {
  var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(800,600,1600,20);
    ground2 = new Ground(400,385,200,20);
   
    
    b2 = new Block(1000,200,50,50)
    b3 = new Block(1000,200,50,50)
    b4 = new Block(1000,200,50,50)
    b5 = new Block(1000,200,50,50)
    b6 = new Block(1000,200,50,50)
    b7 = new Block(1000,200,50,50)
    b8 = new Block(1000,200,50,50)
    b9 = new Block(1000,200,50,50)
    b10 = new Block(1000,200,50,50)     
    b11 = new Block(900,200,50,50)
    b12 = new Block(900,200,50,50)
    b13= new Block(900,200,50,50)
    b14 = new Block(900,200,50,50)
    b15 = new Block(900,200,50,50)
    b16= new Block(900,200,50,50)
    b17= new Block(900,200,50,50)
    b18= new Block(900,200,50,50)
    b19 = new Block(900,200,50,50)
    b20 = new Block(800,200,50,50);
    b21 = new Block(800,200,50,50)
    b22 = new Block(800,200,50,50)
    b23= new Block(800,200,50,50)
    b24 = new Block(800,200,50,50)
    b25 = new Block(800,200,50,50)
    b26= new Block(800,200,50,50)
    b27= new Block(800,200,50,50)
    b28= new Block(800,200,50,50)
    b29= new Block(400,350,50,50)
    b30= new Block(1100,350,50,50)
    

    slingshot1 = new Slingshot(b29.body,{x:700,y:350});
    slingshot2 = new Slingshot(b30.body,{x:1100,y:70});

    
        


}

    
function draw() {
  if(background)
  background(backgroundImg);
  Engine.update(engine);
  fill("Grey");
  textSize(25);
  text("  Please use a mouse for better experience!",550,100)

  ground1.display();
  ground2.display();

  fill("Grey");
  textSize(25);
  text("Pull back as far as you can and release!",280,300);
  

  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();   
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();

b29.depth=slingshot1.depth;
b29.depth=b29.depth+1;
  
  
 
 

  slingshot1.display();
  slingshot2.display();
  

}
function mouseDragged(){
  Matter.Body.setPosition(b29.body,{x:mouseX,y:mouseY})
} 

function mouseReleased(){
  slingshot.fly();
  
}


