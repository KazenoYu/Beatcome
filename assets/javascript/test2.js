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
  $('#album__cover').addClass('show');
  $('#music-player__play i').removeClass('fa-play').addClass('fa-pause'); //改UI顯示
  clearInterval(myTimelineInterval);
  myTimelineInterval = setInterval(renderTimeLine, 100);
}
function callback_pause(val) {
  //- 接收 class AudioMain  音樂暫停 callback
  console.log('Out-Get-pause!!', val);
  // $("#music-player__play").removeClass("isPlaying");//-改按鈕狀態
  clearInterval(myTimelineInterval);
  $('#album__cover').removeClass('show');
  $('#music-player__play i').removeClass('fa-pause').addClass('fa-play'); //改UI顯示
}
function renderTimeLine() {
  //- 取得音樂撥放中秒數狀態
  if (myAudioPlayer == null) return;
  // console.log('GetPlayingTime::', myAudioPlayer.el_audio.currentTime);
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
    price: '530',
  },
  {
    name: 'FancyMoon-Forever Friends',
    fileUrl: 'assets/music/vocal/FancyMoon-Forever Friends.mp3',
    fileImg: 'assets/image/vocal_image/FancyMoon-Forever Friends.jpg',
    type: 'Vocal',
    price: '550',
  },
  {
    name: 'Jennifer Logue-Black and Blue',
    fileUrl: 'assets/music/vocal/Jennifer Logue-Black and Blue.mp3',
    fileImg: 'assets/image/vocal_image/Jennifer Logue-Black and Blue.jpg',
    type: 'Vocal',
    price: '550',
  },
  {
    name: 'Jon Worthy-She_s Alright',
    fileUrl: 'assets/music/vocal/Jon Worthy-She_s Alright.mp3',
    fileImg: 'assets/image/vocal_image/Jon Worthy-She_s Alright.jpg',
    type: 'Vocal',
    price: '550',
  },
  {
    name: 'Jon Worthy-Who I Am',
    fileUrl: 'assets/music/vocal/Jon Worthy-Who I Am.mp3',
    fileImg: 'assets/image/vocal_image/Jon Worthy-Who I Am.jpg',
    type: 'Vocal',
    price: '550',
  },
  {
    name: 'Paradox-The End Is Near (feat. KRUM _ MELISSA CARTER)',
    fileUrl:
      'assets/music/vocal/Paradox-The End Is Near (feat. KRUM _ MELISSA CARTER)',
    fileImg:
      'assets/image/vocal_image/Paradox-The End Is Near (feat. KRUM _ MELISSA CARTER).jpg',
    type: 'Vocal',
    price: '550',
  },
  {
    name: 'Anthem of Rain - Leave The Country',
    fileUrl: 'assets/music/beat/Anthem of Rain - Leave The Country.mp3',
    fileImg: 'assets/image/beat_image/Anthem of Rain - Leave The Country.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Audiobinger - Phony Luv',
    fileUrl: 'assets/music/beat/Audiobinger - Phony Luv.mp3',
    fileImg: 'assets/image/beat_image/Audiobinger - Phony Luv.png',
    type: 'Beat',
    price: '550',
  },
  {
    name: 'Audiobinger - The Journey',
    fileUrl: 'assets/music/beat/Audiobinger - The Journey.mp3',
    fileImg: 'assets/image/beat_image/Audiobinger - The Journey.png',
    type: 'Beat',
    price: '520',
  },
  {
    name: 'dustmotes - Glass Harp',
    fileUrl: 'assets/music/beat/dustmotes - Glass Harp.mp3',
    fileImg: 'assets/image/beat_image/dustmotes - Glass Harp.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'kaleidoplasm - thanks for stealing my bike, jerk',
    fileUrl:
      'assets/music/beat/kaleidoplasm - thanks for stealing my bike, jerk.mp3',
    fileImg:
      'assets/image/beat_image/kaleidoplasm - thanks for stealing my bike, jerk.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Ketsa - Lala',
    fileUrl: 'assets/music/beat/Ketsa - Lala.mp3',
    fileImg: 'assets/image/beat_image/Ketsa - Lala.png',
    type: 'Beat',
    price: '550',
  },
  {
    name: 'Makaih Beats - OnlyOne',
    fileUrl: 'assets/music/beat/Makaih Beats - OnlyOne.mp3',
    fileImg: 'assets/image/beat_image/Makaih Beats - OnlyOne.png',
    type: 'Beat',
    price: '480',
  },
  {
    name: 'Makaih Beats - Permanent Damage',
    fileUrl: 'assets/music/beat/Makaih Beats - Permanent Damage.mp3',
    fileImg: 'assets/image/beat_image/Makaih Beats - Permanent Damage.png',
    type: 'Beat',
    price: '480',
  },
  {
    name: 'Popoi - Dorila y Mello',
    fileUrl: 'assets/music/beat/Popoi - Dorila y Mello.mp3',
    fileImg: 'assets/image/beat_image/Popoi - Dorila y Mello.png',
    type: 'Beat',
    price: '520',
  },
  {
    name: 'Rocky Marsiano - Baile Dos Poucos',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Baile Dos Poucos.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Baile Dos Poucos.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - For The MCs & DJs (cuts by X-Acto)',
    fileUrl:
      'assets/music/beat/Rocky Marsiano - For The MCs & DJs (cuts by X-Acto).mp3',
    fileImg:
      'assets/image/beat_image/Rocky Marsiano - For The MCs & DJs (cuts by X-Acto).png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - Got Game',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Got Game.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Got Game.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - Navalhas',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Navalhas.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Navalhas.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Rocky Marsiano - Time To Redeem',
    fileUrl: 'assets/music/beat/Rocky Marsiano - Time To Redeem.mp3',
    fileImg: 'assets/image/beat_image/Rocky Marsiano - Time To Redeem.png',
    type: 'Beat',
    price: '550',
  },
  {
    name: 'Shaolin Dub - Dem-Wicked',
    fileUrl: 'assets/music/beat/Shaolin Dub - Dem-Wicked.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Dem-Wicked.png',
    type: 'Beat',
    price: '530',
  },
  {
    name: 'Shaolin Dub - From-the-Beast',
    fileUrl: 'assets/music/beat/Shaolin Dub - From-the-Beast.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - From-the-Beast.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Shaolin Dub - Settle-Scores',
    fileUrl: 'assets/music/beat/Shaolin Dub - Settle-Scores.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Settle-Scores.png',
    type: 'Beat',
    price: '500',
  },
  {
    name: 'Shaolin Dub - Temple-Life',
    fileUrl: 'assets/music/beat/Shaolin Dub - Temple-Life.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Temple-Life.png',
    type: 'Beat',
    price: '540',
  },
  {
    name: 'Shaolin Dub - Trumpets-of-Jericho',
    fileUrl: 'assets/music/beat/Shaolin Dub - Trumpets-of-Jericho.mp3',
    fileImg: 'assets/image/beat_image/Shaolin Dub - Trumpets-of-Jericho.png',
    type: 'Beat',
    price: '580',
  },

  {
    name: 'button',
    fileUrl: 'assets/music/effects/botton.mp3',
    fileImg: 'assets/image/effects_image/button.png',
    type: 'Effects',
    price: '50',
  },
  {
    name: '火車汽笛',
    fileUrl: 'assets/music/effects/火車汽笛.wav',
    fileImg: 'assets/image/effects_image/火車汽笛.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '失敗',
    fileUrl: 'assets/music/effects/失敗.mp3',
    fileImg: 'assets/image/effects_image/失敗.png',
    type: 'Effects',
    price: '50',
  },
  {
    name: '吃東西',
    fileUrl: 'assets/music/effects/吃東西.wav',
    fileImg: 'assets/image/effects_image/吃東西.jpg',
    type: 'Effects',
    price: '550',
  },
  {
    name: '定音鼓期待',
    fileUrl: 'assets/music/effects/定音鼓期待.mp3',
    fileImg: 'assets/image/effects_image/定音鼓期待.jpg',
    type: 'Effects',
    price: '580',
  },
  {
    name: '泡泡',
    fileUrl: 'assets/music/effects/泡泡.mp3',
    fileImg: 'assets/image/effects_image/泡泡.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '風',
    fileUrl: 'assets/music/effects/風.mp3',
    fileImg: 'assets/image/effects_image/風.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '倒水',
    fileUrl: 'assets/music/effects/倒水.mp3',
    fileImg: 'assets/image/effects_image/倒水.jpg',
    type: 'Effects',
    price: '50',
  },

  {
    name: '時鐘',
    fileUrl: 'assets/music/effects/時鐘.wav',
    fileImg: 'assets/image/effects_image/時鐘.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '神秘',
    fileUrl: 'assets/music/effects/神秘.m4a',
    fileImg: 'assets/image/effects_image/神秘.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '神聖',
    fileUrl: 'assets/music/effects/神聖.m4a',
    fileImg: 'assets/image/effects_image/神聖.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '閃亮',
    fileUrl: 'assets/music/effects/閃亮.mp3',
    fileImg: 'assets/image/effects_image/閃亮.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '探頭',
    fileUrl: 'assets/music/effects/探頭.wav',
    fileImg: 'assets/image/effects_image/探頭.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '悲慘',
    fileUrl: 'assets/music/effects/悲慘.m4a',
    fileImg: 'assets/image/effects_image/悲慘.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '結帳',
    fileUrl: 'assets/music/effects/結帳.mp3',
    fileImg: 'assets/image/effects_image/結帳.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '鼓',
    fileUrl: 'assets/music/effects/鼓.m4a',
    fileImg: 'assets/image/effects_image/鼓.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '賓果',
    fileUrl: 'assets/music/effects/賓果.mp3',
    fileImg: 'assets/image/effects_image/賓果.jpg',
    type: 'Effects',
    price: '50',
  },
  {
    name: '碼表倒數',
    fileUrl: 'assets/music/effects/碼表倒數.wav',
    fileImg: 'assets/image/effects_image/碼表倒數.jpg',
    type: 'Effects',
    price: '530',
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
    const theType = colors[playType].type;
    initAudioMain(
      fileListsVocal.filter((e) => e.type == theType),
      0,
    );
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

$('.recommend img').bind('click', function () {
  //- 跑馬燈撥放 音樂
  const targetMusicName = $(this).attr('alt');

  const FindMusicFromList = fileListsVocal.filter((e, index) => {
    return e.name.includes(targetMusicName);
  });
  if (FindMusicFromList.length == 0) return; //- arrayObj沒找到Music

  if (myAudioPlayer == null) {
    myAudioPlayer = new AudioMain(
      elementAudio, //- <audio> tag element
      elementAudioSource, //- <source> tag element
      FindMusicFromList,
      true,
      0,
      callback_play,
      callback_pause,
      callback_end,
    );
  } else {
    let foundIdx = -1;
    const hasItem = myAudioPlayer.audioObjList.find((element, idx) => {
      var returnV = element.name.includes(FindMusicFromList[0].name);
      if (returnV) foundIdx = idx;
      return returnV;
    });
    if (hasItem) myAudioPlayer.playListAudio(foundIdx);
    else {
      myAudioPlayer.audioObjList.push(FindMusicFromList[0]);
      myAudioPlayer.setListObjectParse(myAudioPlayer.audioObjList);
      myAudioPlayer.playListAudio(myAudioPlayer.audioObjList.length - 1);
    }
  }
});

function musicTypeNext() {
  playType += 1;
  if (playType >= colors.length) playType = 0;
  $('body').css('background', colors[playType].color);
  $('.colorChange__text').text(colors[playType].type);
  console.log(colors[playType]);

  const theType = colors[playType].type;
  initAudioMain(
    fileListsVocal.filter((e) => e.type == theType),
    0,
  );
}
function musicTypePrev() {
  playType -= 1;
  // colors.length 為 陣列 "數"
  if (playType < 0) playType = colors.length - 1;
  $('body').css('background', colors[playType].color);
  $('.colorChange__text').text(colors[playType].type);

  const theType = colors[playType].type;
  initAudioMain(
    fileListsVocal.filter((e) => e.type == theType),
    0,
  );
}
