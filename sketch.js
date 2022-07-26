var rocket
var alien
var island
var planet
var character
var creature
var animal
var gameState = "serve"


function preload() {

  rocket_img = loadImage("images/rocket.png")
  background_img = loadImage("images/space.jpg")
  planet_img = loadImage("images/planet1.png")
  nextPlanet_img = loadImage("images/nextPlanet.png")
  
}


function setup() {
  createCanvas(windowWidth,windowHeight-50);
  
   rocket=createSprite(width-100, 300, 50, 50);
   planet=createSprite(100,300,50,50)
  
   rocket.addImage(rocket_img)
   rocket.scale = 0.5
   planet.addImage(planet_img)
   planet.scale = 0.5
}

function draw() {

  background(background_img);  
  if(gameState==="serve"){
    if(keyDown("space")){
   rocket.velocityX=-4
  
    }
   fill("white")
   textFont("bold")
   textSize(30)
   text("press space to start",width/2,height/2)
   text("Your rocket was on a space adventure and ran out of fuel.",width/2-250,100)
   
   text("It crashed into an alien planet",width/2-200,150)
   if(planet.isTouching(rocket)){
    planet.destroy()
    rocket.destroy()
    gameState="play"


   }
  
  }
  if(gameState==="play"){
    background(nextPlanet_img)
    
   
  }
  if(gameState==="end"){

  }
  drawSprites();
  //if(gameState=0){
 
//}
} 