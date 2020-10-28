
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;

var bob1, bob2,bob3,bob4,bob5, roofObject;
var rope1, rope2, rope3, rope4, rope5;
var world, engine;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject= new roof(width/2,height/4,400, 20);
	dia=60;
	startbobx = width/2;
	startboby=height/4 +500;
	bob1 = new bob(startbobx-dia*2,startboby,dia)
	bob2 = new bob(startbobx-dia,startboby,dia)
	bob3 = new bob(startbobx,startboby,dia)
	bob4 = new bob(startbobx+dia,startboby,dia)
	bob5 = new bob(startbobx+dia*2,startboby,dia)

	rope1= new rope(bob1.body,roofObject.body,-dia*2,0);
	rope2= new rope(bob2.body,roofObject.body,-dia*1,0);
	rope3= new rope(bob3.body,roofObject.body,0,0);
	rope4= new rope(bob4.body,roofObject.body,dia*1,0);
	rope5= new rope(bob5.body,roofObject.body,dia*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



