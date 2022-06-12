const elementAudio = document.getElementById('audio');
const elementAudioSource = document.getElementById('audio_source');

var myAudioPlayer = null;
var myTimelineInterval = null;

function callback_end(){ //- 接收 class AudioMain  音樂停止 callback
    console.log("Out-Get-End!!");
}
function callback_play(val){ //- 接收 class AudioMain 音樂播放 callback
    console.log("Out-Get-play!!", val);
    // $("#music-player__play").addClass("isPlaying");//-改按鈕狀態
    $("#music-player__title").text(val.name); //- 顯示歌名
    $("#music-player__play i").removeClass("fa-play").addClass("fa-pause");//改UI顯示    
    clearInterval(myTimelineInterval);
    myTimelineInterval = setInterval(renderTimeLine, 100);
}
function callback_pause(val){ //- 接收 class AudioMain  音樂暫停 callback
    console.log("Out-Get-pause!!", val);
    // $("#music-player__play").removeClass("isPlaying");//-改按鈕狀態
    clearInterval(myTimelineInterval);
    $("#music-player__play i").removeClass("fa-pause").addClass("fa-play");//改UI顯示
}
function renderTimeLine(){ //- 取得音樂撥放中秒數狀態
    if (myAudioPlayer == null)return;
    console.log("GetPlayingTime::", myAudioPlayer.el_audio.currentTime);
}

var fileListsVocal = [
    {
      name: 'Delirowe-Good Enough',
      fileUrl: 'assets/music/vocal/Delirowe-Good Enough.mp3',
      fileImg: 'assets/image/vocal_image/Delirowe-Good Enough.jpg',
      type: 'Vocal',
    },
    {
      name: 'Emilyd-Worth Loving',
      fileUrl: 'assets/music/vocal/Emilyd-Worth Loving.mp3',
      fileImg: 'assets/image/vocal_image/Emilyd-Worth Loving.jpg',
      type: 'Vocal',
    },
    {
      name: 'Delirowe-Good Enough',
      fileUrl: 'assets/music/vocal/Delirowe-Good Enough.mp3',
      fileImg: 'assets/image/vocal_image/Delirowe-Good Enough.jpg',
      type: 'Vocal',
    },
];

function initAudioMain(targetLists, startAudio){
    myAudioPlayer = new AudioMain(
        elementAudio, //- <audio> tag element
        elementAudioSource, //- <source> tag element
        targetLists,
        true,
        startAudio,
        callback_play,
        callback_pause,
        callback_end
    );
}

$("#music-player__play").bind('click',()=>{ //- button 音樂 播放/暫停
    if (myAudioPlayer == null){
        initAudioMain(fileListsVocal, 0);
        return;
    }
    if(myAudioPlayer.isPlaying){//- 撥放器 暫停
        myAudioPlayer.pauseAudio();
    }
    else {//- 撥放器 播放
        myAudioPlayer.playAudio();
    }
});


$("#music-playe__prev").bind('click',()=>{ //- button 音樂 playPrev
    if (myAudioPlayer == null){
        initAudioMain(fileListsVocal, fileListsVocal.length-1);
        return;
    }
    myAudioPlayer.playAudioPrev();
});

$("#music-player__next").bind('click',()=>{ //- button 音樂 playNext
    if (myAudioPlayer == null){
        initAudioMain(fileListsVocal, 1);
        return;
    }
    myAudioPlayer.playAudioNext();
});

$("#music-player__random").bind('click',()=>{ //- button 音樂 random
    if (myAudioPlayer == null)return;
    myAudioPlayer.playAudioRandom();
});

$("#music-player__loop").bind('click',()=>{ //- button 音樂loop 
    if (myAudioPlayer == null)return;
    myAudioPlayer.isCycle = !myAudioPlayer.isCycle;
    console.log(myAudioPlayer.el_audio.duration); //- 音樂總長度秒數
    console.log(100*myAudioPlayer.el_audio.currentTime);//- 目前撥放秒數*100
    console.log(myAudioPlayer.el_audio.currentTime); //- 目前撥放秒數
    /* -- 改按鈕樣式:
    if(myAudioPlayer.isCycle)$("#music-player__loop").addClass    
    */
});