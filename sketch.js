
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1 ;
var box,box2,box3 ;
var ground1 ;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);

	

	engine = Engine.create();
	world = engine.world;
paper1 = new Paper (200,400);
box = new Dustbin (1000,570,300,20);
box2 = new Dustbin (1150,570,20,300);
box3 = new Dustbin (850,570,20,300);
ground1=new Ground(0,590,5000,20)	
 //Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper1.display();
  
  box3.display();
  box2.display();
  box.display();
  ground1.display();

  if(keyDown (UP_ARROW)){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-2});
    }
  drawSprites();

  
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-2});
	}
} 




