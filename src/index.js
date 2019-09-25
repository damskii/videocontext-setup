////////////////////////////////VideoContext - QCA3642

///////do not modify
import VideoContext from "videocontext";

////////////////////// ACTION - enter the video URL
var videoName =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

///////do not modify
var canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
document.body.scrollTop = 0; // <-- pull the page back up to the top
document.body.style.overflow = "hidden";
document.body.style.top = 0;
document.body.style.left = 0;
document.body.style.margin = 0;
document.body.style.border = "none";
document.body.appendChild(canvas);

var videoCtx = new VideoContext(canvas);
//Create a video node
var videoNode = videoCtx.video(videoName);
videoNode.connect(videoCtx.destination);

////////////////////// ACTION - enter start/end time

videoNode.start(0);
//videoNode.stop(20);

///////do not modify
videoCtx.play();
