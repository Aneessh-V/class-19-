var background,astronaut;


function preload(){

 bg = loadImage("iss.png");
 sleep = loadAnimation("sleep.png");
 brush = loadAnimation("brush.png");
 gym = loadAniumation("gym1.png","gym2.png");
 eat = loadAnimation("eat1.pmg","eat2.png");
 drink = loadAnimation("drink1.png","drink2.png");
 move = loadAnimation("move.png","move1.png");

}

function setup() {

  createCanvas(400, 400);
  background = createSprite(200,200,400,400);
  background.addImage("bg");

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(220);

  createEdgeSprite;
  astronaut.bouneOff(edges);

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brush",brushing);
  astronaut.changeAnimation("brush");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym",gymming);
  astronaut.changeAnimation("gym");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
    }

    if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eat",eating);
  astronaut.changeAnimation("eat");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
      }

      if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bath",bathing);
  astronaut.changeAnimation("bath");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
        }
  
}