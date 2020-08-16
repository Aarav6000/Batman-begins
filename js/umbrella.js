class Umbrella{
    constructor(){
        var options = {
            'isStatic': true,
            'density': 0.7
        }

        this.body = Bodies.circle(200, 400, 35, options);
        this.image = loadImage("man.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CORNER);
        image(this.image, 110, 390);
    }
}