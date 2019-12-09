var p, r, o;

function setup(){
	createCanvas(800, 600);
	p = new Player(150, 450-15);
	r = new Runner(p);
	o = new Obstacle();
}

function draw(){
	background(40);
	r.render();

	noStroke();
	fill(0);
	rect(0, 450, width, height-450);
	o.render(3);
}

function keyPressed(){
	if (keyCode == 32){
		p.jump();
	}
}