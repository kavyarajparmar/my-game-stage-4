class Pu4 extends BaseClass {
    constructor(x,y){
      super(x,y,60,60);
      this.image = loadImage("p4.png");
     
      this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
  
      super.display();
  
      
      }
    }