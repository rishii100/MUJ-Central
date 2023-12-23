function playPause() {
    var thumbnail = document.querySelector('#thumbnail');
    var pPause = document.querySelector('#play-pause');

    if (pPause.src.includes('play.png')) {
        pPause.src = "LofiPlayer/assets/icons/pause.png";
        thumbnail.style.transform = "scale(1.15)";
    } else {
        pPause.src = "LofiPlayer/assets/icons/play.png";
        thumbnail.style.transform = "scale(1)";
    }
}
