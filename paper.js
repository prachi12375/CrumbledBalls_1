class Paper {
    constructor(x, y, radius){
        var object_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.radius=radius
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, this.radius/2, object_options)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate()
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop()
    }
}
