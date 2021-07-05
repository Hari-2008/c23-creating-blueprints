class Cannon{

    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

    display(){
        fill("grey");

        push();
        //translate function translates the 0,0 axis to your desired x,y axis
        translate(this.x,this.y)
        //rotates the object 
        rotate(this.angle)
        rect(0,-17,this.width,this.height)
        //rect(this.x,this.y,this.width,this.height)
        pop();

        //arc(x,y,width,height,start angle,end angle)
        //Radians => PI = 180degrees
        //PI*2 = TWO_PI
        arc(this.x-30,this.y+90,140,200,PI,TWO_PI)
    }
}