var main = function() {
    //The PLAY button
    $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });
  
    //The PAUSE button
    $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });
  
    //The MUTE button
    $('#mute').click(function(){
        $('#message').text("Track muted");
        $('#player').prop("muted", true);
    });
  
    //The UNMUTE button
    $('#unmute').click(function(){
        $('#message').text("Track unmuted");
        $('#player').prop("muted", false);
    });
  
    //The STOP button
    $('#stop').click(function(){
        $('#message').text("Track stopped");
        $('#player').trigger("pause"); // Pause the music
        $('#player').prop("currentTime", 0); // Set the currentTime of the track to 0
    });
  
    //The VOLUME UP button
    $('#volumeUp').click(function(){
        var currentVolume = $('#player').prop("volume"); // Get current volume
        var newVolume = Math.min(currentVolume + 0.1, 1); // Increase volume by 0.1, but not beyond 1
        $('#player').prop("volume", newVolume); // Set new volume
    });
  
    //The VOLUME DOWN button
    $('#volumeDown').click(function(){
        var currentVolume = $('#player').prop("volume"); // Get current volume
        var newVolume = Math.max(currentVolume - 0.1, 0); // Decrease volume by 0.1, but not below 0
        $('#player').prop("volume", newVolume); // Set new volume
    });
}

$(document).ready(main);
