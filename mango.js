class Mango {
    constructor(x, y, r) {


        var options = {
            restitution: 0,
            friction: 1,
            
            isStatic: true

        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("mango.png")
        this.radius = r;
        World.add(world, this.body);
      
    }
    display() {
    
        imageMode(RADIUS);
        image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
        
    }
}