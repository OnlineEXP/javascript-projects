var s = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if (s) {
		background(0, 0, 0);
		switch = false;
	} else {
		background(255, 255, 255);
		switch = true;
	}
}
