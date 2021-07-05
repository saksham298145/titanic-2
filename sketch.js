var sea,seaimage
var titanic,titanic_sailing
function preload(){
seaimage=loadImage("sea.png")
titanic_sailing=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png",)
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,180,400,20)
sea.addImage("sea",seaimage)
sea.velocityX=-3
sea.scale=0.3
  titanic=createSprite(200,150,20,20)
  titanic.addAnimation("sailing",titanic_sailing)
  titanic.scale=0.25
  edges=createEdgeSprites()


}

function draw() {
  background("blue")
 
 

//titanic.collide(sea)
if (sea.x<0){
sea.x=sea.width/8
}
drawSprites()
}