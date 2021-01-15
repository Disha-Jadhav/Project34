const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup()
{
    createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(806, 590, 100, 100);
    box2 = new box(705, 590, 100, 100);
    box3 = new box(604, 590, 100, 100);
    box4 = new box(503, 590, 100, 100);
    box5 = new box(402, 590, 100, 100);
    box6 = new box(301, 590, 100, 100);
    box7 = new box(200, 590, 100, 100);

    box8 = new box(252, 490, 100, 100);
    box9 = new box(352, 490, 100, 100);
    box10 = new box(453, 490, 100, 100);
    box11 = new box(554, 490, 100, 100);
    box12 = new box(656, 490, 100, 100);
    box13 = new box(758, 490, 100, 100);

    box14 = new box(352, 390, 100, 100);
    box15 = new box(453, 390, 100, 100);
    box16 = new box(554, 390, 100, 100);
    box17 = new box(656, 390, 100, 100);

    box18 = new box(402, 290, 100, 100);
    box19 = new box(503, 290, 100, 100);
    box20 = new box(604, 290, 100, 100);

    box21 = new box(454, 190, 100, 100);
    box22 = new box(556, 190, 100, 100);

    box23 = new box(487, 90, 100, 100);

    ground1 = new ground(500, 690, 1000, 10);

    ball1 = new ball(250, 350, 50, 50);

    rope1 = new rope(ball1.body, {x: 200, y: 50});
}
function draw()
{
    background("yellow");
    Engine.update(engine);

    ground1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();

    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();

    box23.display();

    ball1.display();

    rope1.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
}