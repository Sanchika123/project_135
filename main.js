Status="";

function setup(){
    canvas= createCanvas(450, 380);
    canvas.center();
    video= createCapture();
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= "Status: Detecting Object";
}

function modelLoaded(){
    console.log('Model Loaded!');
    Status = true;
}

function draw(){
    image(video, 0, 0, 450, 380);
}