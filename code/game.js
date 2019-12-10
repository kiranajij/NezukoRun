class Game {
	constructor() {
		this.p = new Player(150, 450-15);

		this.r = new Runner(this.p);
		this.r.collisionCallback = this.collisionCallback;

		// The ground setup. Draw it as a rectangle and infinite mass
		this.ground = createSprite(width/2, 525, width, 155);
		this.ground.debug = true;
		this.ground.draw = function() {rect(0, 0, width, 150);};
		this.ground.immovable = true;

		this.gameValue = true;
	}

	run() {
		background(5, 16, 20);
		this.r.render();

		noStroke();
		fill(0);						
		drawSprite(this.ground);

		// print(this.gameValue);
		return this.r.gameValue;

		// print("run1");
	}

	jump() {
		this.r.jump();
	}

	collisionCallback() {
		this.gameValue = false;
		// print("this", this.gameValue);
		// print("r", this.r.gameValue);
		// print("collision detected");
	}

	stop() {
		this.run = function() {};
		print("stopping game");	
	}
}