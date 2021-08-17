//Namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];

function setup() {
  createCanvas(800,400);
  //You forgot to create Engine and name the world
  engine = Engine.create();
	world = engine.world;
	
  bg =loadImage("snow2.jpg");
  if(frameCount%60 == 0){
    for ( var i=0; i<100;i++){
     //this will be particles instead of snow....a array variable is reqd 
     //y is also random otherwise everything will be in a line
    particles.push(new Snow(random(0,700),random(0,450)));
    }
  }


}

function draw() {
  background(bg);  
  //U forgot to give Engine.update also
  Engine.update(engine);

  
  
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
    //Calling update function which will update dots position
    particles[i].update();
  }

  
  drawSprites();
}