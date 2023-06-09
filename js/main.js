// Get titles from the DOM
var titleMain  = $("#animatedHeading1");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    arrows: false,
    dots: false,
    slidesToShow: 7,
    centerPadding: "5px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: true,
    touchMove: false,
    vertical: true,
    speed: 1200,
    useTransform: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading1").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};

// Get titles from the DOM
var titleMain  = $("#animatedHeading2");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    arrows: false,
    dots: false,
    slidesToShow: 7,
    centerPadding: "5px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: true,
    touchMove: false,
    vertical: true,
    speed: 1400,
    useTransform: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading2").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};

// Get titles from the DOM
var titleMain  = $("#animatedHeading3");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    arrows: false,
    dots: false,
    slidesToShow: 9,
    centerPadding: "5px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: true,
    touchMove: false,
    vertical: true,
    speed: 1200,
    useTransform: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading3").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};



// Get titles from the DOM
var titleMain  = $("#animatedHeading4");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    arrows: false,
    dots: false,
    slidesToShow: 9,
    centerPadding: "5px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: true,
    touchMove: false,
    vertical: true,
    speed: 1400,
    useTransform: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading4").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};

