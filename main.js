song = "";
scorerightwrist = 0;
scoreleftwrist = 0;

rightwristx = 0;
rightwristy = 0;

leftwristx = 0;
leftwristy = 0;

function preload(){
song = loadSound("music.mp3");
}
function setup(){
canvas = createCanvas(400,400)
capture = createCapture(VIDEO)
capture.hide()
poseNet = ml5.poseNet(capture , modelLoaded );
poseNet.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}
function draw(){
image(capture,0,0,400,400)
}

function gotPoses(results){
if(results.length > 0){
    console.log(results)
    scoreleftwrist = results[0].pose.keypoints[9].score;
    scorerightwrist = results[0].pose.keypoints[10].score;

    rightwristx = results[0].pose.rightWrist.x;
    rightwristy = results[0].pose.rightWrist.y;

    leftwristx = results[0].pose.leftWrist.x;
    leftwristy = results[0].pose.leftWrist.y;
}
}

function play(){
    song.play();
 song.setVolume(1);
 song.rate(1);
}
