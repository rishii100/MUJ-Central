var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'jfKfPfyJRdk',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById('play-pause');
    playButton.addEventListener('click', function() {
        var playerState = player.getPlayerState();
        if (playerState === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });
}
