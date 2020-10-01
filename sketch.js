const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella1;

var raindrops = [];



function setup() {
    var canvas = createCanvas(400,400);  
    engine = Engine.create();
    world = engine.world;

    umbrella1=new Umbrella(200,200,20,20);
    umbrella1.scale=0.1;


}

function draw() {
  background("black");
  umbrella1.display(); 

  if(frameCount % 60 === 0){
    var raindrop = new Raindrops(random(0,400), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
}


