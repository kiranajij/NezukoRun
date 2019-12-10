class Runner {

	constructor (p){
		this.player = p;				// this is the player that runs
		this.obstacles = new Group();		// first obstacles

		// TODO: change how the first obstacles is placed and
		// TODO: create more member variables to control the game
		// optimize the code.
		// println(p);

		this.obsHeight = 40;
		this.obsWidth = 10;

		this.prob = 0.8;			// probablity of new obstacle being added
		this.frameDensity = 60;		// after how many frames obstacle to be added

	}

	render(){
		this.player.render();			// Render the player at the position given
		if(frameCount % this.frameDensity == 0){
			/*
			every "frameDensity" frames, there is a "prob" probablity of an obstacle being added.
			*/
			if (random() < this.prob){
				// add a new obstacle (prob*100) % of the time
				var posX = random(width, 1.3*width);
				// var posX = 200;
				var posY = 450 - this.obsHeight/2;
				var dummy = createSprite(posX, posY, 
					this.obsWidth, this.obsHeight);

				dummy.draw = function() {rect(0, 0, this.width, this.height);};
				dummy.life = 200;
				dummy.debug = true;
				dummy.setDefaultCollider();
				dummy.setVelocity(-5, 0);

				this.obstacles.add(dummy);
			}
		}
		this.obstacles.draw();
		// for(var i=this.obstacles.length-1; i>=0; i--){
		// 	// this part is checking if any obstacle went off screen. if it did,
		// 	// don't render it anymore, and remove it from the array. else render it
		// 	if (this.obstacles[i].offscreen()) {
		// 		this.obstacles.splice(i, 1);
		// 	} else {
		// 		this.obstacles[i].render(5);
		// 	}
		// }
		this.obstacles.collide(this.player.player, this.collisionCallback);
	}

	collisionCallback() {
		/*
		
		*/
		print("collision detected");
		noLoop();
		text("Game Over", width/2, height/2);
	}

	jump() {
		this.player.jump();
	}
}