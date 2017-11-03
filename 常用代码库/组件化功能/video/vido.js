$('#content').html(template('template-detail-des', result))

//视频处理
let myVideo = document.getElementById('myVideo')
$('.videoBg').on('click', function() {
  $(this).hide()
  $('video').show()
  myVideo.play()
})
滑动停止播放
var obj = document;
obj.addEventListener('touchmove', function(event) {
  let myVideo = document.getElementById('myVideo')
  $('.videoBg').show()
  $('video').hide()
  if (myVideo) myVideo.pause()
}, false);
