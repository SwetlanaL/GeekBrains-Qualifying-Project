
var videoClip = document.getElementById('video-background');

function playVideo() {
    videoClip.play();
}

function pauseVideo() {
  videoClip.pause();
}

$('button').on('click', function() {
  $('.play, .pause').toggle();
  $('.video-desc').fadeOut(2000);
  $('#video-background').removeAttr('poster');
});

videoClip.onended = function(e) {
  $('.play, .pause').toggle();
  $('.video-desc').fadeIn(2000);
};
