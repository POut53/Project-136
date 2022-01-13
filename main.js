status="";
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
}
function draw(){
    image(video, 0, 0, 600, 600);
}
function start(){
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects"
    document.getElementById("objects").innerHTML="No. of objects"
}
function modelloaded(){
    console.log("Model is Loaded!")
    status=true;
}