class Raindrop  {
         constructor(x,y) {
             var options = { 
                 friction:0.02,
                 restitution:0.5
             }
                 
                 this.rain = Bodies.circle(x,y,5,options);
                 this.r=5;
                 World.add(world,this.rain);
         }
         

         update () {
             if(this.rain.position.y>height){
                 Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,20)});
             }

            }
             showDrop () {
                 fill("blue");
                 ellipseMode(CENTER);
                 ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r);
             }
         }
