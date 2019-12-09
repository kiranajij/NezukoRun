var p, r, o;
var ground;

function setup(){
	createCanvas(800, 600);
	p = new Player(150, 450-15);
	r = new Runner(p);
	ground = createSprite(width/2, 450, width, (height-450)/2);
}

function draw(){
	background(5, 16, 20);
	r.render();

	noStroke();
	fill(0);						
	// rect(0, 450, width, height-450);	// ground
	drawSprite(ground);	
}

function keyPressed(){
	if (keyCode == 32){
		r.jump();
	}
}