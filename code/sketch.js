var g, gv;

function setup(){
	createCanvas(800, 600);
	textAlign(CENTER);
	textSize(32);

	g = new Game();
	gv = true;
}

function draw(){
	
	gv = g.run();
	// g.stop();
	// print(gv);
	if (!gv){
		g.stop();
		text("Game Over", width/2, height/2);
	}
}

function keyPressed(){
	if (keyCode == 32){
		g.jump();
	}
}