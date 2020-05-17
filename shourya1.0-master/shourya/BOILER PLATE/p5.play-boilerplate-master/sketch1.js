var bg;
var platform;
var platformIMG;
var tile1;
var tile2;
var tile3;  
function preload()
{
bg=loadImage("Backgrounds/TheGhouls.png");
tile1=loadImage("platforms/false platform.png")
tile2=loadImage("platforms/hard platform.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  platform= createSprite(displayWidth/2,displayHeight/2-50);
 platform.addImage(tile1);

 platform2= createSprite(displayWidth/2-50,displayHeight/2+200);
 platform2.addImage(tile2);
}

function draw() {
  background(bg);  
  drawSprites();
}