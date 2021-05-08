
var bg;
var canvas,tom,jerry,I,I1,I2,I3,I4,I5,I6;





function preload() {
    //load the images here
    I = loadImage("images/cat1.png");
    I1 = loadImage("images/mouse1.png");
    I3 = loadImage("images/mouse2.png","images/mouse3.png");
    I4 = loadImage("images/cat2.png","images/mouse3.png");
    I5 = loadImage("images/mouse4.png");
    I6 = loadImage("images/cat4.png");
    bg = loadImage("images/garden.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(-900,200);
   tom.addImage(I);
   tom.scale=0.2;
   
   jerry = createSprite(200,600);
   jerry.addImage(I1);
   jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x=jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomLastImage",I6);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage",I5);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX=-5;
      tom.addImage("tom running",I4);
      tom.changeAnimation("tom running");

      jerry.addImage("jerry running",I3);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerry running");

  }


}
