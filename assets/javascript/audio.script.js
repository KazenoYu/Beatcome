class AudioMain {
  constructor(el_audio, el_source, audioList, cycle = false, initPlayCtn = 0) {
    this.el_audio = el_audio;
    this.el_source = el_source;
    this.audioList = audioList;
    this.playingVideoCtn = -1; //- 現在播到第幾首
    if (this.audioList.length > 0) {
      this.playListAudio(initPlayCtn);
    }
    this.isCycle = cycle; //- 重複播放
    if (this.isCycle) {
      //- 要循環播放
      var tThis = this;
      this.el_audio.addEventListener('ended', function () {
        console.log('ended');
        tThis.playAudioNext();
      });
    }
  }
  addList(value) {
    //- 加一筆 音樂庫List array固定用法 (在array加一個element)
    this.audioList.push(value);
  }
  setList(value) {
    //- 設置 音樂庫List
    this.audioList = value;
  }
  playListAudio(number) {
    //- 播放 陣列第N首 音樂
    console.log('Playing ::', number, this.audioList[number]);
    this.el_audio.currentTime = 0; //- 播放器 歸0
    this.playingVideoCtn = number;
    this.el_source.src = this.audioList[number]; //- 找尋Source Data List Child
    this.el_audio.load();
    this.el_audio.play();
  }
  playAudioNext() {
    //- 播放 下一首
    let targetNextCtn = this.playingVideoCtn + 1;
    if (this.playingVideoCtn >= this.audioList.length - 1) targetNextCtn = 0;
    this.playListAudio(targetNextCtn);
  }
  playAudioRandom() {
    //- 隨機播放
    let randomTargetList = [...new Array(this.audioList.length)].map(
      (e, nb) => nb,
    );
    if (this.playingVideoCtn > -1)
      randomTargetList.splice(this.playingVideoCtn, 1); //- 已經有撥放的 > 切掉目前撥放的child
    const randomChildItemNb =
      randomTargetList[Math.floor(Math.random() * randomTargetList.length)];
    this.playListAudio(randomChildItemNb);
  }
  stopAudio() {
    this.el_audio.pause();
  }
  playAudio() {
    this.el_audio.play();
  }
  removeAudioList(number) {
    //- 移除第N首 音樂
    if (number < 0 || number > this.audioList.length - 1) return;
    if (number <= this.playingVideoCtn) {
      //- 切掉的那一首音樂是 撥放中 或 撥放中之前 > 現在撥放中參數-1 (避免自動撥放下一手造成錯亂)
      this.playingVideoCtn -= 1;
    }
    this.audioList.splice(number, 1); //- 切掉那一筆
  }
}
