song1 = "";
song2 = "";
function preload()//easy
{
    song1 = loadSound("Wannabe.mp3");
    song2 = loadSound("music.mp3");
}

function setup()//easy
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()//easy
{
    image(video, 0, 0, 600, 500);
}

function play()//easy
{
    song.play();
}


