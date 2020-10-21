
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,bob6;
var kad;
var rope1,rope2;
var BobDiameter =4;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   kad =new Ground(800,190,500,20);

   bob1 =new Bob(600,400,20);
   bob2 =new Bob(600,420,20);
   bob3 =new Bob(600,440,20);
   bob4 =new Bob(600,460,20);
   bob5 =new Bob(600,480,20);
   bob6 =new Bob(600,500,20);

  rope1 =new rope(bob1.body,kad.body,-BobDiameter*2,0);
  rope2 =new rope(bob2.body,kad.body,-BobDiameter*2,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
  kad.display();

  rope1.display();
  rope2.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
 
 

  drawSprites();
 
}



