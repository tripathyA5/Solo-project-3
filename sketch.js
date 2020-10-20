const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingshot;
var bg;

var score=0;
var count=0;
function preload() {
 //   backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    switchBG();
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
  

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

 
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
  
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
  

    box5.display();
    log4.display();
   

    bird.display();
    platform.display();
    //log6.display();
}






async function switchBG(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/EST");
    var response1=await response.json();
    var dayTime=response1.datetime;
    console.log(dayTime);
    var time=dayTime.slice(11,13);
    console.log(time);
    if(time>07&&time<20){
    bg="sprites/bg.png"
    }else{
        bg="sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg);
}