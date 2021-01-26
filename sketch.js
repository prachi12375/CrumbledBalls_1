
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject	
var world;

function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(1200,550);
	paperObject=new Paper(175, 500, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  paperObject.display();
  dustbinObj.display();
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:555,y:-555});
	
    }
	}

