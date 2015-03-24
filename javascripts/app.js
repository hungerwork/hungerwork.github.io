$(document).ready(function(){
  $('li').on('click', function(e){
    $(this).css({
      'text-decoration':'line-through',
      'color': '#FFFFFF',
      'background-color': '#EFEFEF'
    });
  });
});