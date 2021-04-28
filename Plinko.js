class Plinko{
    constructor(x,y){
      var options = {
          restitution:1,
          friction:0,

         isStatic: true
      }
      this.r=10
      this.body = Bodies.circle(x,y,10,options);
     // this.radius = this.body.circleRadius;
      World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        noStroke();
        fill("green")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}