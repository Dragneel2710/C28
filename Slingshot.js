class Slingshot{
    constructor(a,b){
     var options ={
      bodyA: a,
      pointB: b,
      length: 20,
      stiffness:0.03
    }
     this.c = Matter.Constraint.create(options)
     this.d = b
     World.add(world,this.c)
    }
    display(){
        if(this.c.bodyA){
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.d.x,this.d.y);
        }
    }
     release(){
        this.c.bodyA = null;
    }
}