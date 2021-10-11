var projectiles = [];
var tempdirection = 0;

function Projectile(x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.move = function() {
        this.x += cos(direction) * this.speed;
        this.y += sin(direction) * this.speed;
    }
    this.display = function() {
        //fill(color[0], color[1], color[2]);
        circle(this.x, this.y, 5);
    }
}

function outOfBounds(projectile) {
    //if (projectile.y -
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    noStroke();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    if (mouseIsPressed) {
        tempdirection = acos((mouseX - windowWidth / 2) / (mouseY - windowHeight / 2));
        projectiles.push(new Projectile(windowWidth / 2, windowHeight / 2, 10, tempdirection));
    }
    for (i = 0; i < projectiles.length; i++) {
        
        projectiles[i].move();
        projectiles[i].display();
    }
    fill(0, 255, 0);
    circle(windowWidth, windowHeight, 40);
}

function keyPressed() {
    if (keyCode === 32) {
        //balls = [];
    }
}
