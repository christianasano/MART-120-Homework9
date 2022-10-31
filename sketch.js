function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(120,45,78);
    textSize(17)
    text("My Beautiful Canvas", 10,60);

    fill(400,122, 0);
    circle(250,100,175);
    

    fill(155, 204, 0);
    square(300,100,275,100);

    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    ellipse(245, 135, 30, 45)
    line(325,50,360,175);
    line(130,175,175,50);

    fill(400);
    triangle(420,320,250,420,280,320)

    rect(250,295,450,10);

    fill(500);
    textSize(30);
    text("Christian Asano",270,500 );
}
