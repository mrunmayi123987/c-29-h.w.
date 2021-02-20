const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1 , stand2;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12, box13,box14 , box15;
var box16 , box17, box18, box19 , box20, box21 , box22;
var ball;
function preload() {


}

function setup(){

    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20);

    stand1 = new Ground(600,200,300,20); 
    stand2 = new Ground(200,300,300,20);

    box1 = new Box (500,190,40,30);
    box2 = new Box (540,190,40,30);
    box3 = new Box (580,190,40,30);
    box4 = new Box (620,190,40,30);
    box5 = new Box (660,190,40,30);
    box6 = new Box (540,160,40,30);
    box7 = new Box (580,160,40,30);
    box8 = new Box (620,160,40,30);
    box9 = new Box (580,130,40,30);
    box10 = new Box (100,290,40,30);
    box11 = new Box (140,290,40,30);
    box12 = new Box (180,290,40,30);
    box13 = new Box (220,290,40,30);
    box14 = new Box (260,290,40,30);
    box15 = new Box (300,290,40,30);
    box16 = new Box (140,260,40,30);
    box17 = new Box (180,260,40,30);
    box18 = new Box (220,260,40,30);
    box19 = new Box (260,260,40,30);
    box20 = new Box (180,230,40,30);
    box21 = new Box (220,230,40,30);
    box22 = new Box(200,200,40,30);

   ball = Bodies.circle(500,200,20);
   World.add(world,ball);

  
    
}

function draw(){
    background("white");
   
    Engine.update(engine);
    textSize(20);
  fill("yellow");
    text("drag the hexagonal stone and release it to launch it towards the block",100,30);
ground.display();
stand1.display();
stand2.display();
fill("skyblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
fill("pink");
box6.display();
box7.display();
box8.display();
fill("turquoise");
box9.display();
fill("skyblue");
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
fill("pink");
box16.display();
box17.display();
box18.display();
box19.display();
fill("turquoise");
box20.display();
box21.display();
fill("grey");
box22.display();

ellipseMode(CENTER);
fill("pink");
circle(ball.x,ball.y,20);

}
