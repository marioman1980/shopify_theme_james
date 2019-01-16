$(document).ready(function(){
// Toggle collection submenus
  $(".collection-sub-menu li").hover(function(){
    $(".collection-dropdown", this).slideDown(100);
  }, function(){
    $(".collection-dropdown", this).stop().slideUp(100);
  });

  $(".collection-sub-menu li").click(function(){
    $(".collection-dropdown", this).slideToggle(100);
  });

})