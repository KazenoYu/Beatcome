var navBtn = document.querySelector('.navbar__button');
var listAside = document.querySelector('.list__aside');
var asideSearchImg = document.querySelector('.aside__search > img');
var asideSearchInput = document.querySelector('.aside__search > input');

navBtn.onclick = function () {
  navBtn.classList.toggle('active');
  listAside.classList.toggle('active');
};

asideSearchImg.onclick = function () {
  asideSearchInput.classList.toggle('active');
};
