class Block{
    constructor(x,y,width,height){        
        var options={
            'restitution':0.8,
            'friction':0.8,
            'density':1,
        }
        this.image = loadImage("sprites/Monster-01.png");
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);   
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(4);
        stroke("Red");        
        rectMode(CENTER);
        fill("Blue");
        rect(0,0,this.width,this.height);
        pop()
        

    }
}