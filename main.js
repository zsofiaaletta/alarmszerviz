function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


jQuery("#backtotop").click(function () {
  jQuery("body,html").animate({
      scrollTop: 0
  }, 600);
});
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 150) {
      jQuery("#backtotop").addClass("visible");
  } else {
      jQuery("#backtotop").removeClass("visible");
  }
});