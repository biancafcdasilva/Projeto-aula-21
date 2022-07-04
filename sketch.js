
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,leftside,rightside;
var radius = 40; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ballOptions = {
		restitution: 0.3
	};

	ball = Bodies.circle(260, 100, radius/2, ballOptions);
	Engine.run(engine);
    
	World.add(world,ball);

	ground = new Ground(width/2, 670, width, 20);
	leftside = new Ground(600, 600, 20, 120);
	rightside = new Ground(700, 600, 20, 120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x, ball.position.y, radius);
  ground.display();
  leftside.display();
  rightside.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball,ball.position,{x:0.02,y:-0.1});
	}
}


