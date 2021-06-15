function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);

    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 40, 40, 560, 400);

    fill(25, 25, 112);
    stroke(25, 25, 112)
    rect(25, 50, 50, 410);

    fill(25, 25, 112);
    stroke(25, 25, 112)
    rect(565, 50, 50, 410);

    fill(25, 25, 112);
    stroke(25, 25, 112)
    rect(25, 25, 590, 50);

    fill(25, 25, 112);
    stroke(25, 25, 112)
    rect(25, 405, 590, 50);

    fill(47, 79, 79);
    stroke(47, 79, 79)
    circle(50, 50, 80)

    fill(47, 79, 79);
    stroke(47, 79, 79)
    circle(50, 430, 80)

    fill(47, 79, 79);
    stroke(47, 79, 79)
    circle(590, 50, 80)

    fill(47, 79, 79);
    stroke(47, 79, 79)
    circle(590, 430, 80)
}