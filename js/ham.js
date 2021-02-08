// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;
let isTop = false;

function doSomething(scroll_pos) {
  var trigger = 290;
  if(scroll_pos > trigger){
      if(isTop)return;
      document.getElementsByClassName("page-header")[1].style.top = 0;
      isTop = true;
    }else{
      if(!isTop)return;
      document.getElementsByClassName("page-header")[1].style.top = "-90px";
      isTop = false;
  }
}

document.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});