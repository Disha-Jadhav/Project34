class rope
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 450
        }
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display()
    {
        if(this.Rope.bodyA)
        {
            fill("white");
            stroke("white");
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);      
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
    
}