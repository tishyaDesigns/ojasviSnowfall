class Snow{
    constructor(x, y) {
        var options = {
            'restitution':1,
            isStatic:false
        }
        this.r = 20;
        this.image=loadImage("snow5.webp")
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
        //this .color not needed as we r using image to display
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        //no need to give ellipseMode
        image(this.image, 0,0,this.r,this.r)
        pop();
    }

    //Checking if drops reach the bottom(height means total canvas height) this will adjust the position randomly anywhere inside canvas
    update(){
        if (this.body.position.y>=height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})
        }
    }
};