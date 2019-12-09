class Player {
	// This is the player that runs. Later will be implemented as Nezuko
	// I probably need to add a option to use custom runners other than Nezuko.
	// For now it is only a Ellipse.

	//TODO : change the constructor to use sprites instead of a circle.

	constructor (x, y) {
		// Here x, y is the initial position of the player.
		// dx and dy is added to make it easier to implement the mechanics of the
		// player like jump. 

		this.x = x;
		this.y = y;

		this.g = 0.35; 			// gravity
		this.dy = 0;			// change in pos y 

		this.velY = 0;			// the velocity along y. we don't need velx
								// because player is fixed along X.
	}

	render() {
		/*
		x: x position to be rendered
		y: y position to be rendered
		*/

		// draw the player ( ellipse ) centered at x, y but 
		// changed added with a translation dx and dy where dx and
		// dy are to be determined by the jumps and etc...

		// TODO: refactor it to look better;

		/*
		Everytime render is called we'll calculate the new dx and dy
		*/

		
			this.velY += this.g;
			this.dy += this.velY;

		if (this.velY > abs(this.maxVel)){
			this.vel = -this.maxVel;
		}

		if (this.dy >= 0){
			// can't go bellow this.y. so set everyting back to 0;
			this.velY = 0;
			this.dy = 0;
		}

		noStroke();
		fill(255);
		ellipse(this.x, this.y+this.dy, 30, 30);

	}

	jump() {

		// Triggers everytime space is pressed. On jump we will add a upward velocity
		// to the player and determine dx and dy with a gravity G.
		
		if (this.velY == 0){

			this.velY -= 7;
		}
		// print(this.vel);

	}

}