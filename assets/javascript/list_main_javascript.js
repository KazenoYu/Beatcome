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

var mainMusic = document.querySelector('.main__music');

mainMusic.onscroll = function () {
  if (mainMusic.scrollTop >= 0 && mainMusic.scrollTop < 884) {
    playlist.forEach(function (element) {
      element.classList.remove('active');
    });
    playlistOne.classList.add('active');
  } else if (
    mainMusic.scrollTop >= 884 &&
    mainMusic.scrollTop < 2899.199951171875
  ) {
    playlist.forEach(function (element) {
      element.classList.remove('active');
    });
    playlistTwo.classList.add('active');
  } else if (
    mainMusic.scrollTop >= 2899.199951171875 &&
    mainMusic.scrollTop < 4914.39990234375
  ) {
    playlist.forEach(function (element) {
      element.classList.remove('active');
    });
    playlistThree.classList.add('active');
  } else {
    playlist.forEach(function (element) {
      element.classList.remove('active');
    });
    playlistFour.classList.add('active');
  }
};
