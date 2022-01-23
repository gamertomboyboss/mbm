img = "";

function setup()
{
    canvas = createCanvas(690,460);
    canvas.center();
}

function preload()
{
    img = loadImage('chipmunk.webp');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("chipmunk", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}