const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground
function preload(){
  backgroundImg = loadImage("background.png");
 
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  //create ground object
ground=new Ground()

//create fruit object with ball class


//create rope with rope class



}
function draw() {
  background(backgroundImg); 
 
  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
 //display ground,rope and fruit

  imageMode(CENTER)
  
  image(g,450,270)

  //slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition();
}
function mouseReleased(){
  rope.fly();

}
