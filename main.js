noseX=0;
noseY=0;
function preload() {
  clown_nose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}


//createCapture() function helps to access the webcam
//hide- hide the extra component created by p5.js for live preview
//poseNet() of ml5.js used to initialize the poseNet model.

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

//modelLoaded is a fn that confirms the PoseNet is initialized
//on() starts executing posenet 
//'pose' gets x and y coordinates of the 17 parts
//gotPoses is a function which writes the gotten poses

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-20;
    noseY = results[0].pose.nose.y+20;
    console.log("nose x="+noseX);
    console.log("nose y="+noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  
  image(clown_nose,noseX,noseY,50,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
