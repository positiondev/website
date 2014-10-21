var before = [];
var current = false;
var after = [];

var doScroll = false;

$(document).ready(function() {
  $("#montage .item").click(function () {
    // get rid of all current highlights
    $("#montage .item").removeClass("sel");
    // set selected background
    $(this).addClass("sel");
    // set main background
    $(this).parent().removeClass();
    $("#horiz-nav").removeClass();
    if ($(this).hasClass("identity")) {
      $(this).parent().addClass("identity");
      $("#horiz-nav").addClass("identity");
    } else if ($(this).hasClass("programming")) {
      $(this).parent().addClass("programming");
      $("#horiz-nav").addClass("programming");
    } else if ($(this).hasClass("web")) {
      $(this).parent().addClass("web");
      $("#horiz-nav").addClass("web");
    } else if ($(this).hasClass("print")) {
      $(this).parent().addClass("print");
      $("#horiz-nav").addClass("print");
    }
    // put contents in top box
    $("#contents #graphic").html($(this).children(".graphic").html());
    $("#contents #text").html($(this).children(".text").html());
    if (doScroll) {
      // $(window).scrollTop(135)
      $.smoothScroll(135);
    }

    // set up the zipper to allow arrowing through
    var all = [];
    $("#montage .item").each(function (n,i) { all.push($(i).attr("id")) });
    current = $(this).attr("id");
    curIndex = all.indexOf(current);
    // alert(window.current + " " + curIndex + " " + all);
    before = all.slice(0,curIndex);
    before.reverse();
    after = all.slice((curIndex + 1), all.length);
  });
  // set up first one, but without scrolling
  $("#montage #programming2").click();
  // now have all others scroll
  doScroll = true;

  // set up horizontal navigation
  $("#horiz-nav #next").click(function () {
    if (after.length != 0) {
      doScroll = false;
      $("#" + after.shift()).click();
      doScroll = true;
    }
    return false;
  });

  $("#horiz-nav #prev").click(function () {
    if (before.length != 0) {
      doScroll = false;
      $("#" + before.shift()).click();
      doScroll = true;
    }
    return false;
  });

  // set up vertical navigation
  $("#work #up").click(function () {
    $.smoothScroll(135);
  });
  $("#work #down").click(function () {
    $.smoothScroll(1000);
  });

  // make sure #wrap is tall enough
  var win_height = $(window).height();
  var bottom_height = $("#bottom-wrap").height();
  var extra_padding = 0;//20 /* header */ + 20 /* main */ + 20 /* footer */;
  var height = win_height - bottom_height - extra_padding;
  $("#top-wrap").css("min-height", String(height) + "px");

});
