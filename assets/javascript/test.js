import 'assets/javascript/audio.script.js';

const elementAudio = document.getElementById('audio');
const elementAudioSource = document.getElementById('audio_source');

var myAudioPlayer = null;

function mainStart() {
  //- 點擊初始化
  if (myAudioPlayer == null) {
    myAudioPlayer = new AudioMain(
      elementAudio, //- <audio> tag element
      elementAudioSource, //- <source> tag element
      [
        'assets/music/beat/01-Anthem of Rain - Leave The Country.mp3',
        'assets/music/beat/02-Audiobinger - Phony Luv.mp3',
        'assets/music/beat/03-Audiobinger - The Journey.mp3',
        'assets/music/beat/04-Rocky Marsiano - Baile Dos Poucos.mp3',
        'assets/music/beat/05-Ketsa - Lala.mp3',
        'assets/music/beat/06-Makaih Beats - OnlyOne.mp3',
        'assets/music/beat/07-Makaih Beats - Permanent Damage.mp3',
        'assets/music/beat/08-Shaolin Dub - Trumpets-of-Jericho.mp3',
        'assets/music/beat/09-Rocky Marsiano - Assim E Assado.mp3',
        'assets/music/beat/10-Shaolin Dub - Settle-Scores.mp3',
        'assets/music/beat/11-Shaolin Dub - Dem-Wicked.mp3',
        'assets/music/beat/12-Rocky Marsiano - Time To Redeem.mp3',
        'assets/music/beat/13-Shaolin Dub - Temple-Life.mp3',
        'assets/music/beat/14-Rocky Marsiano - Got Game.mp3',
        'assets/music/beat/15-kaleidoplasm - thanks for stealing my bike, jerk.mp3',
        'assets/music/beat/16-Shaolin Dub - From-the-Beast.mp3',
        'assets/music/beat/17-Popoi - Dorila y Mello.mp3',
        'assets/music/beat/18-Rocky Marsiano - For The MCs & DJs (cuts by X-Acto).mp3',
        'assets/music/beat/19-Rocky Marsiano - Navalhas.mp3',
        'assets/music/beat/20-dustmotes - Glass Harp.mp3',
      ],
      true,
      0,
    );
    console.log(myAudioPlayer);
  } else {
    myAudioPlayer.playAudioNext();
  }
}

const mainRandom = document.getElementById('music-player__random');

function mainRandom() {
  addEventListener('click', function () {
    console.log('click');
    myAudioPlayer.playAudioRandom();
  });
}

function audioActions(domEle, actionType) {
  if (myAudioPlayer == null) return;

  ee.style.color = 'red';
  console.log('GG::', ee);
}

var fileListsVocal = [
  {
    name: 'Delirowe-Good Enough',
    fileUrl: 'assets/music/vocal/Delirowe-Good Enough',
    fileImg: 'assets/image/vocal_image/Delirowe-Good Enough.jpg',
    type: 'Vocal',
  },
  {
    name: 'Emilyd-Worth Loving',
    fileUrl: 'assets/music/vocal/Emilyd-Worth Loving',
    fileImg: 'assets/image/vocal_image/Emilyd-Worth Loving.jpg',
    type: 'Vocal',
  },
  {
    name: 'Delirowe-Good Enough',
    fileUrl: 'assets/music/vocal/Delirowe-Good Enough',
    fileImg: 'assets/image/vocal_image/Delirowe-Good Enough.jpg',
    type: 'Vocal',
  },
];
