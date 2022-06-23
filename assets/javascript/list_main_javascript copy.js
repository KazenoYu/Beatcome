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

var windowClientWidth = document.documentElement.clientWidth;
var mainMusic = document.querySelector('.main__music');

mainMusic.onscroll = function () {
  /*console.log(windowClientWidth);
  console.log(mainMusic.scrollTop);*/

  if (windowClientWidth <= 1536 && windowClientWidth > 1196) {
    if (mainMusic.scrollTop >= 0 && mainMusic.scrollTop < 600) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistOne.classList.add('active');
    } else if (mainMusic.scrollTop >= 600 && mainMusic.scrollTop < 2060) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistTwo.classList.add('active');
    } else if (mainMusic.scrollTop >= 2060 && mainMusic.scrollTop < 3540) {
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
  } else if (windowClientWidth == 1196) {
    if (mainMusic.scrollTop >= 0 && mainMusic.scrollTop < 580) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistOne.classList.add('active');
    } else if (mainMusic.scrollTop >= 580 && mainMusic.scrollTop < 2060) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistTwo.classList.add('active');
    } else if (mainMusic.scrollTop >= 2060 && mainMusic.scrollTop < 3494) {
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
  } else if (windowClientWidth <= 480 && windowClientWidth > 357) {
    if (mainMusic.scrollTop >= 0 && mainMusic.scrollTop < 936) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistOne.classList.add('active');
    } else if (mainMusic.scrollTop >= 936 && mainMusic.scrollTop < 3225) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistTwo.classList.add('active');
    } else if (mainMusic.scrollTop >= 3225 && mainMusic.scrollTop < 5514) {
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
  } else if (windowClientWidth <= 357) {
    if (mainMusic.scrollTop >= 0 && mainMusic.scrollTop < 1838) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistOne.classList.add('active');
    } else if (mainMusic.scrollTop >= 1838 && mainMusic.scrollTop < 6379) {
      playlist.forEach(function (element) {
        element.classList.remove('active');
      });
      playlistTwo.classList.add('active');
    } else if (mainMusic.scrollTop >= 6379 && mainMusic.scrollTop < 10920) {
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
  }
};
