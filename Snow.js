class Snow{
 constructor(x,y){
  var options = {
  isStatic:false,
 }

  this.body = Bodies.circle(x, y, this.r, options);
  this.image = loadImage("snow5.webp");
 }

  display(){
   var snowpos = this.body.position;
   var angle = this.body.angle;
   push();
   translate(this.body.position.x, this.body.position.y);
   rotate(this.body.angle);
   imageMode(CENTER);
   ellipseMode(CENTER);
   image(this.image, 0,0,this.r*2, this.r*2);
   pop();
 }
}