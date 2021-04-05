var bg
var cat, mouse
function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png")
    catImage =loadImage("images/cat1.png")
    mouseImage = loadImage ("images/mouse1.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImage4 = loadAnimation("images/cat4.png")
    mouseImage4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600)
    cat.addAnimation("cat1",catImage)
    cat.scale = 0.2
    mouse = createSprite(100,600)
    mouse.addAnimation("mouse1",mouseImage)
    mouse.scale =0.2
    cat.addAnimation("cat2",catImage2)
    mouse.addAnimation("mouse2",mouseImage2)
    cat.addAnimation("cat4",catImage4)
    mouse.addAnimation("mouse4",mouseImage4)
}

function draw() {

    background(bgImage);
    if(cat.isTouching(mouse)){
    cat.changeAnimation("cat4",catImage4)
    mouse.changeAnimation("mouse4",mouseImage4)
    cat.velocityX = 0
    mouse.velocityX = 0
    }
   
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    cat.changeAnimation("cat2",catImage2)
    mouse.changeAnimation("mouse2",mouseImage2)
    cat.velocityX = -5
}

}
