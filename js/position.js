$(document).ready(function() {
  // make sure #wrap is tall enough
  var win_height = $(window).height();
  var bottom_height = $("#bottom-wrap").height();
  var extra_padding = 0;//20 /* header */ + 20 /* main */ + 20 /* footer */;
  var height = win_height - bottom_height - extra_padding;
  $("#top-wrap").css("min-height", String(height) + "px");

});
