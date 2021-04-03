class bob
{
	constructor(x,y,RADIUS)
	{
		var options={
			
            restitution:1,
            friction:0,
            density:0.8,
            
		}
		
        this.x = x;
        this.y = y;
		
		this.body=Bodies.circle(this.x, this.y, RADIUS/2, options)
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
            var angle=this.body.angle; 

			push()
			translate(pos.x, pos.y);

            rotate(angle);
            
            stroke("red");
            fill("green");
            
			ellipseMode(CENTER)	
            ellipse(0,0,40);
			pop()
			
	}

}