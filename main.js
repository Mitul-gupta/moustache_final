noseX=0;
noseY=0;
function preload() {
moustache= loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup() {
 canvas= createCanvas(640,480);
 canvas.position(350, 200);
 video = createCapture(VIDEO);
 video.hide()

 posenet = ml5.poseNet(video, modelLoaded);
 posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}

function draw() {
image(video,0,0,640,480);
image(moustache, noseX, noseY, 70, 40)
}

function take_snapshot() {
    save('photo.png')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -35 ;
        noseY = results[0].pose.nose.y +2; 
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
    }
}