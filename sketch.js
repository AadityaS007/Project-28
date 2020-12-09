
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground;

function preload() {


}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Base(600, 679, 1200, 80)
	tree1 = new Tree(900, 350, 450, 600)
	boy1 = new Boy(200, 590, 180, 230)
	stone1 = new Stone(150, 600, 50, 50)
	mango1 = new Mango(900, 100, 30)
	mango2 = new Mango(900, 200, 30)
	mango3 = new Mango(900, 150, 30)
	mango4 = new Mango(900, 230, 30)
	mango5 = new Mango(800, 100, 30)
	mango6 = new Mango(800, 150, 30)
	mango7 = new Mango(800, 200, 30)
	mango8 = new Mango(800, 250, 30)
	mango9 = new Mango(1000, 200, 30)
	mango10 = new Mango(1000, 100, 30)
	chain1 = new Chain(stone1.body, { x: 150, y: 600 })

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("lightblue");

	drawSprites();
	tree1.display();
	ground.display();
	boy1.display();
	stone1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango9.display();
	chain1.display();


}

function mouseDragged() {

	Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY })
}

function mouseReleased(){

	chain1.throw()
}
