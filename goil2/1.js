// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer = 0;

function autoSlider() {
  timer = setTimeout(function(){
    var p = document.getElementById('polosa');
    left = left - 848;
    if (left < -2544) {
      left = 0;
      clearTimeout(timer);
    }
    p.style.left = left + 'px';
    autoSlider();
  }, 3000);
}
