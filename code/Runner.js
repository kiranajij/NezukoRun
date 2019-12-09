class Runner {

	constructor (p){
		this.player = p;				// this is the player that runs
		this.obstacles = [];			// to store the obstacles
		this.obstacles[0] = new Obstacle(500);		// first obstacles

		// TODO: change how the first obstacles is placed and
		// TODO: create more member variables to control the game
		// optimize the code.
		// println(p);

		this.prob = 0.5;			// probablity of new obstacle being added
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
				this.obstacles.push(
					new Obstacle(random(width, 1.3*width)));
			}
		}
		for(var i=this.obstacles.length-1; i>=0; i--){
			// this part is checking if any obstacle went off screen. if it did,
			// don't render it anymore, and remove it from the array. else render it
			if (this.obstacles[i].offscreen()) {
				this.obstacles.splice(i, 1);
			} else {
				this.obstacles[i].render(5);
			}
		}
	}

	collisionDestection () {
		/*
		*/
	}
}