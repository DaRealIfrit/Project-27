const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
/*leftboxbody, middleboxbody, rightboxbody,*/ 
var roof, 
blob1, blob2, blob3, blob4, blob5,
rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	/*leftboxbody = new Box(600, 640, 20, 100);
	middleboxbody = new Box(700, 680, 150, 20);
  rightboxbody = new Box(750, 640, 20, 100);*/

  blobDiameter = 40
  

  blob1 = new Blob(200, 400, 90)
  blob2 = new Blob(300, 400, 90)
  blob3 = new Blob(400, 400, 90)
  blob4 = new Blob(500, 400, 90)
  blob5 = new Blob(600, 400, 90)

  roof = new Roof(width/2, 100, 500, 50);
  
  rope1 = new Rope(blob1.body, roof.body, -blobDiameter*5, 0)
  rope2 = new Rope(blob2.body, roof.body, -blobDiameter*2.5, 0)
  rope3 = new Rope(blob3.body, roof.body, -blobDiameter%1, 0)
  rope4 = new Rope(blob4.body, roof.body, blobDiameter*2.5, 0)
  rope5 = new Rope(blob5.body, roof.body, blobDiameter*5, 0)
  

  
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  /*leftboxbody.display();
  middleboxbody.display();
  rightboxbody.display();*/

  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites();
}



