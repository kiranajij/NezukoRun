var p, r, o;

function setup(){
	createCanvas(800, 600);
	p = new Player(150, 450-15);
	r = new Runner(p);
}

function draw(){
	background(5, 16, 20);
	r.render();

	noStroke();
	fill(0);						
	rect(0, 450, width, height-450);	// ground
}

function keyPressed(){
	if (keyCode == 32){
		r.jump();
	}
}