class Plinko{
  constructor(x, y) {
      var options = {'restitution':0.8,'friction':1.0,'isStatic':true};
      this.body = Bodies.circle(x, y, 10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
}