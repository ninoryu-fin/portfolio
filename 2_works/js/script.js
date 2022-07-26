$(document).ready(function(){
      $('.slider').bxSlider({
		auto: true,
		mode: 'fade'
		});
});

$( function() {

  $("#ImgSet img").fadeTo(0,1.0); // 初期状態 20%

  $("#ImgSet img").hover(
    function(){
      $(this).fadeTo(200, 0.5); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo(500, 1.0); // マウスが離れたら20%に戻す
    }
  );

});