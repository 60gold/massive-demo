$(document).ready(function() {

  //navbar的scroll效果
  $(window).scroll(function(){
    if(innerWidth>=768){
      if($(window).scrollTop() > 0){
        $('#header').css({'height': '60px', 'background-color': 'black'})
        $('#header img').css({'width': '50%', 'height': '50%', 'padding-top': '5px'})
      } else {
        $('#header').css({'background-color': 'transparent'})
        $('#header img').css({'width': '100%', 'height': '100%', 'padding-top': '0px'})
      };
    }
  });

  $(window).scroll(function(){
    if(innerWidth>=768){
      if($(window).scrollTop() > 0){
        $('#header.header-light').css({'height': '60px', 'background-color': 'white', 'box-shadow': '0 1px 2px rgb(0 0 0 / 10%)'})
        $('#header img').css({'width': '50%', 'height': '50%', 'padding-top': '5px'})
      } else {
        $('#header.header-light').css({'background-color': 'transparent', 'box-shadow': 'none'})
        $('#header img').css({'width': '100%', 'height': '100%', 'padding-top': '0px'})
      };
    }
  });

  $(window).scroll(function(){
    if(innerWidth>=768){
      if($(window).scrollTop() > 0){
        $('#header.header-light.header-display').css({'height': '60px', 'background-color': 'white', 'box-shadow': '0 1px 2px rgb(0 0 0 / 10%)'})
        $('#header img').css({'width': '50%', 'height': '50%', 'padding-top': '5px'})
      } else {
        $('#header.header-light.header-display').css({'height': '100px', 'background-color': 'white', 'box-shadow': 'none'})
        $('#header img').css({'width': '100%', 'height': '100%', 'padding-top': '0px'})
      };
    }
  });

  //progress-bar效果
  var a,b,c;  
  a = $(window).height();    //瀏覽器視窗高度  
  var group = $(".progress-bar");  
  $(window).scroll(function(){  
      b = $(this).scrollTop();   //頁面滾動的高度  
      c = group.offset().top;    //元素距離文件(document)頂部的高度  
      if(a+b>c){  
        $('.progress-bar-1').addClass('progress-bar-ani-1');
        $('.progress-bar-2').addClass('progress-bar-ani-2');
        $('.progress-bar-3').addClass('progress-bar-ani-3');
      }
  });  

  //數字遞增動畫效果
  var d,e,f;  
  var once = true;
  d = $(window).height();    //瀏覽器視窗高度  
  var group2 = $(".number");  
  $(window).scroll(function(){  
      e = $(this).scrollTop();   //頁面滾動的高度  
      f = group2.offset().top;    //元素距離文件(document)頂部的高度  
      if(d+e>f && once){  
        $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 2000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
        });
        once = false;
      }
  });
  
  //go-top滑動效果
  $(function(){
    $("#go-top").click(function(){
      $("html,body").animate({scrollTop:0},900);

      return false;
    });
  });

  
  // window.onload = function() { 
  //   $(".load").fadeOut(3000);
  // };

  //loading效果
  $("#loading").fadeOut(2000);

});