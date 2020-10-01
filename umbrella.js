class Umbrella{
    constructor (x,y) {
        var options ={
            isStatic:true
        }
    this.image=loadImage("Walking Frame/walking_1.png");
    this.umbrella = Bodies.circle(x,y,options);
    World.add(world,this.umbrella);
    
    } 

    display () {
      var pos =this.body.position;
      imageMode(CENTER);
      image(pos.x, pos.y);
    }
}