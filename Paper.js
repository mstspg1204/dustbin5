class Paper {
    constructor(x,y){
       var options= {
           isStatic:false,
           friction:0.5,
           density:1.2,
           restitution:0.3
       }

       this.body= Bodies.circle(x,y,10,options)
       this.diameter= 10;
       World.add(world, this.body);
    }

    display(){
        fill("white")
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0, this.diameter,this.diameter);
        pop();
      
    }
}

