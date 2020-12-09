class Bob {

    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:1,
			friction:0,
			density:0.8
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,radius/2,options);

        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        ellipseMode(CENTER)
        ellipse(0,0,this.radius, this.radius);
        pop();
    }






}
