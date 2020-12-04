$(function()
{
    var playerTrack = $("#player-track"), bgArtwork = $('#bg-artwork'), bgArtworkUrl, albumName = $('#album-name'), trackName = $('#track-name'), albumArt = $('#album-art'), sArea = $('#s-area'), seekBar = $('#seek-bar'), trackTime = $('#track-time'), insTime = $('#ins-time'), sHover = $('#s-hover'), playPauseButton = $("#play-pause-button"),  i = playPauseButton.find('i'), tProgress = $('#current-time'), tTime = $('#track-length'), seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0, buffInterval = null, tFlag = false, albums = ['Dawn','Me & You','Electro Boy','Home','Proxy (Original Mix)'], trackNames = ['Skylike - Dawn','Alex Skrindo - Me & You','Kaaze - Electro Boy','Jordan Schor - Home','Martin Garrix - Proxy'], albumArtworks = ['_1','_2','_3','_4','_5'], trackUrl = ['https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3'], playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
