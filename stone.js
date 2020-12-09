class Stone {
    constructor(x, y, width, height) {
        var options = {

            restitution: 0.5,
            friction: 0,
            density: 10
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png")
        World.add(world, this.body)

    }


    display() {
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
    }
}