const elementAudio = document.getElementById('audio');
const elementAudioSource = document.getElementById('audio_source');

var myAudioPlayer = null;
var myTimelineInterval = null;

function callback_end() {
  //- 接收 class AudioMain  音樂停止 callback
  console.log('Out-Get-End!!');
}
function callback_play(val) {
  //- 接收 class AudioMain 音樂播放 callback
  console.log('Out-Get-play!!', val);
  // $("#music-player__play").addClass("isPlaying");//-改按鈕狀態
  $('#music-player__title').text(val.name); //- 顯示歌名
  $('#album__cover').attr('src', val.fileImg); //-切換圖片
  // $('#music-player__img-container').addClass('music-player__img-container img'); //-專輯旋轉
  $('#music-player__play i').removeClass('fa-play').addClass('fa-pause'); //改UI顯示
  clearInterval(myTimelineInterval);
  myTimelineInterval = setInterval(renderTimeLine, 100);
}
function callback_pause(val) {
  //- 接收 class AudioMain  音樂暫停 callback
  console.log('Out-Get-pause!!', val);
  // $("#music-player__play").removeClass("isPlaying");//-改按鈕狀態
  clearInterval(myTimelineInterval);
  $('#music-player__play i').removeClass('fa-pause').addClass('fa-play'); //改UI顯示
}
function renderTimeLine() {
  //- 取得音樂撥放中秒數狀態
  if (myAudioPlayer == null) return;
  console.log('GetPlayingTime::', myAudioPlayer.el_audio.currentTime);
}

var fileListsVocal = [
  {
    name: 'Delirowe-Good Enough',
    fileUrl: 'assets/music/vocal/Delirowe-Good Enough.mp3',
    fileImg: 'assets/image/vocal_image/Delirowe-Good Enough.jpg',
    type: 'Vocal',
    price: '500',
  },
  {
    name: 'Emilyd-Worth Loving',
    fileUrl: 'assets/music/vocal/Emilyd-Worth Loving.mp3',
    fileImg: 'assets/image/vocal_image/Emilyd-Worth Loving.jpg',
    type: 'Vocal',
    price: '480',
  },
  {
    name: 'Anthem of Rain - Leave The Country',
    fileUrl: 'assets/music/beat/Anthem of Rain - Leave The Country.mp3',
    fileImg: 'assets/image/beat_image/Anthem of Rain - Leave The Country.png',
    type: 'Beat ',
    price: '550',
  },
  {
    name: 'Audiobinger - Phony Luv',
    fileUrl: 'assets/music/beat/Audiobinger - Phony Luv.mp3',
    fileImg: 'assets/image/beat_image/Audiobinger - Phony Luv.png',
    type: 'Beat ',
    price: '550',
  },
  {
    name: 'Audiobinger - The Journey',
    fileUrl: 'assets/music/beat/Audiobinger - The Journey.mp3',
    fileImg: 'assets/image/beat_image/Audiobinger - The Journey.png',
    type: 'Beat ',
    price: '520',
  },
  {
    name: 'dustmotes - Glass Harp',
    fileUrl: 'assets/music/beat/dustmotes - Glass Harp.mp3',
    fileImg: 'assets/image/beat_image/dustmotes - Glass Harp.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'kaleidoplasm - thanks for stealing my bike, jerk',
    fileUrl:
      'assets/music/beat/kaleidoplasm - thanks for stealing my bike, jerk.mp3',
    fileImg:
      'assets/image/beat_image/kaleidoplasm - thanks for stealing my bike, jerk.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Ketsa - Lala',
    fileUrl: 'assets/music/beat/Ketsa - Lala.mp3',
    fileImg: 'assets/image/beat_image/Ketsa - Lala.jpg',
    type: 'Beat ',
    price: '580',
  },
  {
    name: 'Makaih Beats - OnlyOne',
    fileUrl: 'assets/music/beat/Makaih Beats - OnlyOne.mp3',
    fileImg: 'assets/image/beat_image/Makaih Beats - OnlyOne.jpg',
    type: 'Beat ',
    price: '480',
  },
  {
    name: 'Makaih Beats - Permanent Damage',
    fileUrl: 'assets/music/beat/Makaih Beats - Permanent Damage.mp3',
    fileImg: 'assets/image/beat_image/Makaih Beats - Permanent Damage.jpg',
    type: 'Beat ',
    price: '480',
  },
  {
    name: 'Popoi - Dorila y Mello',
    fileUrl: 'assets/music/beat/Popoi - Dorila y Mello.mp3',
    fileImg: 'assets/image/beat_image/Popoi - Dorila y Mello.jpg',
    type: 'Beat ',
    price: '520',
  },
  {
    name: 'Rocky Marsiano - Assim E Assado',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Assim E Assado.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Assim E Assado.jpg',
    type: 'Beat ',
    price: '520',
  },
  {
    name: 'Rocky Marsiano - Baile Dos Poucos',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Baile Dos Poucos.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Baile Dos Poucos.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - For The MCs & DJs (cuts by X-Acto)',
    fileUrl:
      'assets/music/beat/Rocky Marsiano - For The MCs & DJs (cuts by X-Acto).mp3',
    fileImg:
      'assets/image/beat_image/Rocky Marsiano - For The MCs & DJs (cuts by X-Acto).jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - Got Game',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Got Game.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Got Game.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - Navalhas',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Navalhas.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Navalhas.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - Time To Redeem',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Time To Redeem.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Time To Redeem.jpg',
    type: 'Beat ',
    price: '550',
  },
  {
    name: 'Shaolin Dub - Dem-Wicked',
    fileUrl: 'assets/music/beat/Shaolin Dub - Dem-Wicked.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Dem-Wicked.jpg',
    type: 'Beat ',
    price: '530',
  },
  {
    name: 'Shaolin Dub - From-the-Beast',
    fileUrl: 'assets/music/beat/Shaolin Dub - From-the-Beast.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - From-the-Beast.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Shaolin Dub - Settle-Scores',
    fileUrl: 'assets/music/beat/Shaolin Dub - Settle-Scores.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Settle-Scores.jpg',
    type: 'Beat ',
    price: '500',
  },
  {
    name: 'Shaolin Dub - Temple-Life',
    fileUrl: 'assets/music/beat/Shaolin Dub - Temple-Life.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Temple-Life.jpg',
    type: 'Beat ',
    price: '540',
  },
  {
    name: 'Shaolin Dub - Trumpets-of-Jericho',
    fileUrl: 'assets/music/beat/Shaolin Dub - Trumpets-of-Jericho.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Trumpets-of-Jericho.jpg',
    type: 'Beat ',
    price: '500',
  },

  {
    name: 'botton',
    fileUrl: 'assets/music/effects/botton.mp3',
    fileImg: 'assets/image/effects_image/botton.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '火車汽笛',
    fileUrl: 'assets/music/effects/火車汽笛.wav',
    fileImg: 'assets/image/effects_image/火車汽笛.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '失敗',
    fileUrl: 'assets/music/effects/失敗.mp3',
    fileImg: 'assets/image/effects_image/火車汽笛.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '吃東西',
    fileUrl: 'assets/music/effects/吃東西.wav',
    fileImg: 'assets/image/effects_image/吃東西.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '定音鼓期待',
    fileUrl: 'assets/music/effects/定音鼓期待.mp3',
    fileImg: 'assets/image/effects_image/定音鼓期待.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '泡泡',
    fileUrl: 'assets/music/effects/泡泡.mp3',
    fileImg: 'assets/image/effects_image/泡泡.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '風',
    fileUrl: 'assets/music/effects/風.mp3',
    fileImg: 'assets/image/effects_image/風.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '倒水',
    fileUrl: 'assets/music/effects/倒水.mp3',
    fileImg: 'assets/image/effects_image/倒水.jpg',
    type: 'Effects ',
    price: '50',
  },

  {
    name: '時鐘',
    fileUrl: 'assets/music/effects/時鐘.wav',
    fileImg: 'assets/image/effects_image/時鐘.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '神秘',
    fileUrl: 'assets/music/effects/神秘.m4a',
    fileImg: 'assets/image/effects_image/神秘.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '神聖',
    fileUrl: 'assets/music/effects/神聖.m4a',
    fileImg: 'assets/image/effects_image/神聖.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '閃亮',
    fileUrl: 'assets/music/effects/閃亮.mp3',
    fileImg: 'assets/image/effects_image/閃亮.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '探頭',
    fileUrl: 'assets/music/effects/探頭.wav',
    fileImg: 'assets/image/effects_image/探頭.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '悲慘',
    fileUrl: 'assets/music/effects/悲慘.m4a',
    fileImg: 'assets/image/effects_image/悲慘.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '結帳',
    fileUrl: 'assets/music/effects/結帳.mp3',
    fileImg: 'assets/image/effects_image/結帳.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '鼓',
    fileUrl: 'assets/music/effects/鼓.m4a',
    fileImg: 'assets/image/effects_image/鼓.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '賓果',
    fileUrl: 'assets/music/effects/賓果.mp3',
    fileImg: 'assets/image/effects_image/賓果.jpg',
    type: 'Effects ',
    price: '50',
  },
  {
    name: '碼表倒數',
    fileUrl: 'assets/music/effects/碼表倒數.wav',
    fileImg: 'assets/image/effects_image/碼表倒數.jpg',
    type: 'Effects ',
    price: '50',
  },
];

function initAudioMain(targetLists, startAudio) {
  myAudioPlayer = new AudioMain(
    elementAudio, //- <audio> tag element
    elementAudioSource, //- <source> tag element
    targetLists,
    true,
    startAudio,
    callback_play,
    callback_pause,
    callback_end,
  );
}

$('#music-player__play').bind('click', () => {
  //- button 音樂 播放/暫停
  if (myAudioPlayer == null) {
    initAudioMain(fileListsVocal, 0);
    return;
  }
  if (myAudioPlayer.isPlaying) {
    //- 撥放器 暫停
    myAudioPlayer.pauseAudio();
  } else {
    //- 撥放器 播放
    myAudioPlayer.playAudio();
  }
});

$('#music-playe__prev').bind('click', () => {
  //- button 音樂 playPrev
  if (myAudioPlayer == null) {
    initAudioMain(fileListsVocal, fileListsVocal.length - 1);
    return;
  }
  myAudioPlayer.playAudioPrev();
});

$('#music-player__next').bind('click', () => {
  //- button 音樂 playNext
  if (myAudioPlayer == null) {
    initAudioMain(fileListsVocal, 1);
    return;
  }
  myAudioPlayer.playAudioNext();
});

$('#music-player__random').bind('click', () => {
  //- button 音樂 random
  if (myAudioPlayer == null) return;
  myAudioPlayer.playAudioRandom();
});

$('#music-player__loop').bind('click', () => {
  //- button 音樂loop
  if (myAudioPlayer == null) return;
  myAudioPlayer.isCycle = !myAudioPlayer.isCycle;
  console.log(myAudioPlayer.el_audio.duration); //- 音樂總長度秒數
  console.log(100 * myAudioPlayer.el_audio.currentTime); //- 目前撥放秒數*100
  console.log(myAudioPlayer.el_audio.currentTime); //- 目前撥放秒數
  /* -- 改按鈕樣式:
    if(myAudioPlayer.isCycle)$("#music-player__loop").addClass
    */
});
