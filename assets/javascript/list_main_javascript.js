var playlist = document.querySelectorAll('.main__list__button > a > span');
var playlistOne = document.querySelector('.playlist01');
var playlistTwo = document.querySelector('.playlist02');
var playlistThree = document.querySelector('.playlist03');
var playlistFour = document.querySelector('.playlist04');

var playlistClickOne = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistOne.classList.add('active');
};

var playlistClickTwo = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistTwo.classList.add('active');
};
var playlistClickThree = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistThree.classList.add('active');
};

var playlistClickFour = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistFour.classList.add('active');
};

playlistClickOne();

/*var mainMusicContent = document.querySelector('.main__music__content');
var mainMusicScrollTop = document.querySelector(
  '.main__music__content',
).scrollTop;

mainMusicContent.onscroll = function () {
  console.log(mainMusicScrollTop);
};*/
