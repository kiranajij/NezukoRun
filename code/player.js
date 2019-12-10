class Player {
	// This is the player that runs. Later will be implemented as Nezuko
	// I probably need to add a option to use custom runners other than Nezuko.
	// For now it is only a Ellipse.

	//TODO : change the constructor to use sprites instead of a circle.

	constructor (x, y) {
		// Here x, y is the initial position of the player.
		// dx and dy is added to make it easier to implement the mechanics of the
		// player like jump. 

		this.player = createSprite(x, y, 30, 30);

		// change this line to create the animation.
		this.player.draw = function() {ellipse(0, 0, 30, 30);}

		this.x = x;
		this.y = y;

		this.g = 0.35; 			// gravity
		this.dy = 0;			// change in pos y 

		this.velY = 0;			// the velocity along y. we don't need velx
								// because player is fixed along X.
		this._tDoubleJump = true;	// is able to double jump
		this._isStationary = true;	// to save processing


		this.player.debug = true;
		this.posPlayer = createVector(x, y);
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

		// print(this.dy);

		if (this.dy < 0 || this.velY < 0){

			this.dy += this.velY;
			this.velY += this.g;

			


		} else if (this.dy > 0){
			print(this.dy);
			// can't go bellow this.y. so set everyting back to 0;
			// TODO: this part needs a little more optimization
			// this takes more time to calculate everytime
			this.velY = 0;
			this.dy = 0;
			// this.posPlayer.y = this.y;
			// this.player.position = this.posPlayer;
			this._tDoubleJump = true;
			// console.log("doube jump reset");
		}

		noStroke();
		fill(156, 168, 216);
		// ellipse(this.x, this.y+this.dy, 30, 30);
		this.posPlayer.y = this.y+this.dy;
		this.player.position = this.posPlayer;
		this.player.display();
		this.player.setDefaultCollider();

	}

	jump() {

		// Triggers everytime space is pressed. On jump we will add a upward velocity
		// to the player and determine dx and dy with a gravity G.
		
		if (this.velY == 0){

			this.velY = -7;

		} else if (this._tDoubleJump) {
			// if player can double jump, then double jump and set the 
			//indicator to false.

			this.velY = -7;
			this._tDoubleJump = false;
			// print("dbl jump");
		}
		// print(this.vel);
		// this.player.setVelocity(0, -7);
		// // this.player.setPositon(0, 0);

	}

}