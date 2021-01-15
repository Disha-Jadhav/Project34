class ball
{
    constructor(x, y, r) 
    {
        var options = 
        {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display()
      {
        var angle = this.body.angle;
        var pos = this.body.position;
        fill("black");
        stroke("black");
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}