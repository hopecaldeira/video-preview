console.log("page loaded...");

function play(video){
    video.play();
    document.getElementById("chocoVid").muted = true;
}

function pause(video) {
    video.pause();
}