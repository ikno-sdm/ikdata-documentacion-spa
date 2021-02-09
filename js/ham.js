// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;
let isTop = false;

function doSomething(scroll_pos) {
  const trigger = 290;
  const m = -20.0 / trigger;
  const b = 25;

  var aux = m * scroll_pos + b;
  if (aux > 5) {
    document.getElementsByClassName("toc")[0].style.top = aux + "rem";
  } else {
    document.getElementsByClassName("toc")[0].style.top = "5rem";
  }

  // console.log(scroll_pos);
  // console.log(aux);

  if (scroll_pos > trigger) {
    if (isTop) return;
    var pageHeader = document.getElementsByClassName("page-header")[1]
    pageHeader.style.top = 0;
    pageHeader.style.Display = "block";
    isTop = true;
  } else {
    if (!isTop) return;
    var pageHeader = document.getElementsByClassName("page-header")[1]
    pageHeader.style.top = "-18rem";
    pageHeader.style.Display = "none";
    isTop = false;
  }
}

document.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});