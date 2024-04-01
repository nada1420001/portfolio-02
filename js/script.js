let aboutOffset = $("#about").offset().top;
$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > aboutOffset - 50) {
    $("header").css("backgroundColor", "rgba(0,0,0,0.7)");
  } else {
    $("header").css("backgroundColor", "transparent");
  }
});
