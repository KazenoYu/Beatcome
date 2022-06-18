var navbar = document.getElementById('navbar');
var sections = document.querySelectorAll('section');

window.onscroll = function () {
  var windowScrollHeight = document.documentElement.scrollTop; // 滑軸目前的位子
  var windowClientHeight = document.documentElement.clientHeight; // 螢幕目前的高度

  // 100 可以改為 windowClientHeight
  if (windowScrollHeight > windowClientHeight) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }

  // element.offsetTop = 目前元素在畫面上的定位
  sections.forEach(function (element) {
    if (
      element.offsetTop - windowClientHeight <=
      windowScrollHeight - windowClientHeight / 2
    ) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
};
