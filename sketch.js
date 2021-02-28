
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var box1,box2,box3;
var ground;
function preload()
{
	dustbinImg=loadImage("Images/dustbin.png");
}

function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin=createSprite(555,525,10,50);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.3

	box1=createSprite(500,520,10,120);
	box1.shapeColor="white";

	box2=createSprite(610,520,10,120);
	box2.shapeColor="white";
	
    box3=createSprite(555,585,125,10);
    box3.shapeColor="white";

	ground=new Ground(400,590,800,10);
	

	paper1 =new Paper(100,450,40);
	//paper1.shapeColor="white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
 paper1.display();
 ground.display();
 dustbin.display();
 box1.display();
 box2.display();
 box3.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55})
	}
}


