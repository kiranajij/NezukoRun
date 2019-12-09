var p, r;

function setup(){
	createCanvas(600, 400);
	p = new Player(100, 300);
	r = new Runner(p);
}

function draw(){
	background(220);
	r.render();
}

function keyPressed(){
	if (keyCode == 32){
		p.jump();
	}
}