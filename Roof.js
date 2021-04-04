class Roof {
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
      this.height=height;
      World.add(world,this.body);
     
    }
    
  
    
    
    
    display(){
    Push();
    rectMode(RADIUS);
    fill(129,129,129);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    Pop();
    
    
    
    
    }
    
    
    
    
    
    }