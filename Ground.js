class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution:0,
            friction:1.0,
        
        }

        this.ground= Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.ground)
    }
    display(){
      fill("yellow")  
      var pos = this.ground.position
   
       rectMode(CENTER);
        rect(pos.x,pos.y, this.width,this.height );
    }
}