var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  //criar sprite trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  //crriar sprite ground (chão)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  //criando invisible ground (chão invisível) <<<<<<<<<<<<<<<
  invisibleGround = createSprite(200,190,400,10); //cria o sprite <<<<<<<<<<<<<<<
  invisibleGround.visible = false; //a visibilidade é falsa, portanto não vai aparecer o sprite <<<<<<<<<<<<<<<
}
function draw() {
  background(220);
  //pular quando barra de espaço é pressionada e adiciona o limite de que só pode pular entre a posiçao y 100 a 600
  if (keyDown("space") && trex.y >= 100) { //<<<<<<<<<<<<<<< adiciona o && trex.y >= 100
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  //impedir trex de cair
  trex.collide(invisibleGround); // <<<<<<<<<<<<<<< troca o ground por invisibleGround
  drawSprites();
}
