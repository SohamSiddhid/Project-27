
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject,bobObject1,bobObject2,bobObject3,bobObjec4;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {

	 createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;

	//Create the Bodies Here.

	 bobObject=new bob(360,480,40);
	 bobObject1=new bob(400,480,40);
	 bobObject2=new bob(440,480,40);
	 bobObject3=new bob(480,480,40);
	 bobObject4=new bob(520,480,40);

	 roofObj=new roof(440,260,230,20);
     
	 rope1=new rope(bobObject.body,roofObj.body,-100,0);
	 rope2=new rope(bobObject1.body,roofObj.body,-50,0);
	 rope3=new rope(bobObject2.body,roofObj.body,0,0);
	 rope4=new rope(bobObject3.body,roofObj.body,50,0);
	 rope5=new rope(bobObject4.body,roofObj.body,100,0);

	Engine.run(engine);
  
}


function draw() {

 rectMode(CENTER);
 background("white");

  bobObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

  roofObj.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
  
}

 function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject.body,bobObject.body.position,{x:-50,y:0});
	}
 }

