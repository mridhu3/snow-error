const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Snow = [];
var maxsnow= 100;
var umbrella;
var rand;
var bg  = loadImage('snow2.jpg')



function preload()
{
  bg  = loadImage('snow2.jpg')
}
function setup() {
  createCanvas(800,400);
  background(bg)
  createSprite(400, 200, 50, 50);

  for(var i = 0; i < maxsnow; i++){
    Snow.push(new snow (random(0,500), random(0,500)));
 }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}