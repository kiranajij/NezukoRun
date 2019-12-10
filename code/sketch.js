var p, r, o;
var ground, test;

function setup(){
	createCanvas(800, 600);
	p = new Player(150, 450-15);
	r = new Runner(p);

	// The ground setup. Draw it as a rectangle and infinite mass
	ground = createSprite(width/2, 525, width, 155);
	ground.debug = true;
	ground.draw = function() {rect(0, 0, width, 150);};
	ground.immovable = true;

	textAlign(CENTER);
	textSize(32);
}

function draw(){
	background(5, 16, 20);
	r.render();

	noStroke();
	fill(0);						
	// rect(0, 450, width, height-450);	// ground
	drawSprite(ground);
	// drawSprite(test);
	// p.player.collide(ground);
}

function keyPressed(){
	if (keyCode == 32){
		r.jump();
	}
}