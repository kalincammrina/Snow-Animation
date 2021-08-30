var snow = [];
var snow, background;
var snowImg, backgroundImg;

 function preload(){
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow5.webp");
 }

 function setup(){
  createCanvas(900,600);

  snow = createSprite(600,50);
  snow.addImage(snowImg);
  snow.scale = 0.1;
 }

 function draw(){
  background(backgroundImg);
  drawSprites();
 }