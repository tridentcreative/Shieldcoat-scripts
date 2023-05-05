$('.nav_drop-down').on('mouseover',function() {
  $('.nav_links_container').addClass('is-over');
  $(this).find('.nav_drop-down_container').removeClass('is-out');
});
$('.nav_drop-down').on('mouseout',function() {
  $('.nav_links_container').removeClass('is-over');
  $(this).find('.nav_drop-down_container').addClass('is-out');
});
