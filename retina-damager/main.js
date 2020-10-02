var s = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if (s) {
		background(0, 0, 0);
		s = false;
	} else {
		background(255, 255, 255);
		s = true;
	}
}
