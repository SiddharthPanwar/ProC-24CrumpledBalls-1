
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine , world , groundObject , paperObject , dustbin1 , dustbin2 , dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObject = new ground(400,700,800,20);
	paperObject = new paper(100,360,20,20);
	
     dustbin1 = new dustbin(630,685,100,10);
	 dustbin2 = new dustbin(570,670,20,40);
	 dustbin3 = new dustbin(690,670,20,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObject.display();
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-10})
	}
}

