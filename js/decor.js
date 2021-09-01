$(document).ready(function() {

  //navbar的scroll效果
  $(window).scroll(function(){
    if(innerWidth>=768){
      if($(window).scrollTop() > 0){
        $('#header').css({'height': '60px', 'background-color': 'white', 'box-shadow': '0 1px 2px rgb(0 0 0 / 10%)'})
        $('#header img').css({'width': '50%', 'height': '50%', 'padding-top': '5px'})
      } else {
        $('#header').css({'background-color': 'transparent', 'box-shadow': 'none'})
        $('#header img').css({'width': '100%', 'height': '100%', 'padding-top': '0px'})
      };
    }
  });
  
  //fancybox縮圖彈出外掛
  $(".group_images").fancybox({
    'autoScale' : true,
    'transitionIn' : 'fade',
    'transitionOut' : 'fade',
    'showCloseButton' : 'true',
    'showNavArrows' : 'true',
    'onClosed' : function() {alert('test');}
  });

  //go-top滑動效果
  $(function(){
    $("#go-top").click(function(){
      $("html,body").animate({scrollTop:0},900);

      return false;
    });
  });

  //loading效果
  $("#loading").fadeOut(2000);

});