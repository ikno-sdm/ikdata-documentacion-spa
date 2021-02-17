// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;
let isTop = false;
let trigger = 290;

function onScroll(scroll_pos) {
  topToC();
  floatHeader();
  // console.log(scroll_pos);  

  function floatHeader() {
    if (scroll_pos > trigger) {
      if (isTop) return;
      var pageHeader = document.getElementsByClassName("page-header")[1]
      pageHeader.style.top = 0;
      pageHeader.style.Display = "block";
      $('.backtop').fadeIn();
      isTop = true;
    } else {
      if (!isTop) return;
      var pageHeader = document.getElementsByClassName("page-header")[1]
      pageHeader.style.top = "-18rem";
      pageHeader.style.Display = "none";
      $('.backtop').fadeOut(function() {
        $(this).removeAttr('style');
      });
      isTop = false;
    }
  }
  function topToC() {
    var tocPos = (window.getComputedStyle((document.getElementsByClassName("toc")[0]))).position;
    if (tocPos != "fixed") return;
    const m = -20.0 / trigger;
    const b = 25;

    var aux = m * scroll_pos + b;
    // console.log(aux);
    if (aux > 5) {
      document.getElementsByClassName("toc")[0].style.top = aux + "rem";
    } else {
      document.getElementsByClassName("toc")[0].style.top = "5rem";
    }
  }
}

document.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      onScroll(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

function openTarget() {
  var hash = location.hash;
  if (!hash) return;
  var details = (document.querySelector(hash).parentElement).parentElement;
  if (details && details.tagName.toLowerCase() === 'details') details.open = true;
  location = location;
}

window.addEventListener('hashchange', openTarget);
openTarget();

function backTop() {
	$("html, body").animate({scrollTop: '0'}, 'slow');
	$(".backtop").removeClass('active');
}
