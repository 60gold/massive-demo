$(document).ready(function() {
  
  //fancybox縮圖彈出外掛

  //deror.recent-product
  $(".group_images").fancybox({
    'autoScale' : true,
    'transitionIn' : 'fade',
    'transitionOut' : 'fade',
    'showCloseButton' : 'true',
    'showNavArrows' : 'true',
    'onClosed' : function() {alert('test');}
  });

});