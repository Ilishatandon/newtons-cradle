
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var b1,b2,b3,b4,b5,roof1
var r1,r2,r3,r4,r5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
b1=new Ball(340,470,20)
b2=new Ball(380,470,20)
b3=new Ball(420,470,20)
b4=new Ball(460,470,20)
b5=new Ball(500,470,20)
roof1=new roof(425,300,250,20)
r1= new Rope(b1.body,roof1.body,-80,0)
r2= new Rope(b2.body,roof1.body,-40,0)
r3= new Rope(b3.body,roof1.body,0,0)
r4= new Rope(b4.body,roof1.body,40,0)
r5= new Rope(b5.body,roof1.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  b1.display();
  b2.display()
  b3.display();
  b4.display();
  b5.display();
  roof1.display();
  r1.display()
  r2.display()
  r3.display()
  r4.display()
  r5.display()
  


 
}

function keyPressed(){
	if(keyCode===32)
	{
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
	}
}

