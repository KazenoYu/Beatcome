let myShopList = [];
let myShopListIndex = [];

shopListInit();

function shopListInit() {
  changeAtagHrefWithCartListIdx(); //- 初始載入 戴入query
  renderCartDataFromUrl(); //- 依照 url.query list 渲染 購物車
  renderShopList();
}

function renderCartDataFromUrl() {
  //- 依照 url.query 渲染 購物車
  let myList = getParameterByName('list', window.location.url);
  if (myList) {
    //- url query有購物車資訊
    console.log('AA---1');
    const listArr = myList.split(',');
    if (listArr.length == 0) return;
    console.log('AA---2');
    listArr.forEach((e, nb) => {
      let ListIdx = parseInt(e);
      if (typeof ListIdx != 'number') return;
      myShopList.push(fileListsVocal[ListIdx]);
      myShopListIndex.push(ListIdx);
    });
    console.log(myShopList);
  }
}

function changeAtagHrefWithCartListIdx() {
  //- <a class="bind_query_A"> 的href query戴上 購物車資訊
  if (myShopListIndex.length > 0) {
    //- <a> tag跳轉href帶 購物車目前array index 參數
    let OrUrl = $('.bind_query_A').attr('href').split('html')[0];
    OrUrl = OrUrl + `html?list=${myShopListIndex.join(',')}`;
    console.log(OrUrl);
    $('.bind_query_A').attr('href', OrUrl);
  }
}

function getParameterByName(name, url) {
  //- 取得URL Query
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function musicItemHtmlParse(data, nb) {
  //- 購物車單筆Item Element
  let typeClass = 'isVocal';
  if (data.type == 'Beat') typeClass = 'isBeat';
  else if (data.type == 'Effects') typeClass = 'isEffects';
  return `
     <div class="musicItem">
      <span class="idx txtAlnLft inBk">${nb + 1}</span>
      <span class="name txtAlnLft inBk">${data.name}</span>
      <span class="description txtAlnLft inBk">${data.name}</span>
      <span class="type inBk ${typeClass}">
        <span>${data.type}</span>
      </span>
      <span class="price txtAlnLft inBk">NTD.${data.price}</span>
      <button class="inBk" onClick="removeItem(${nb})">
        <i class="fa-solid fa-minus"></i>
      </button>
      <button class="inBk" onClick="playShopCartItem(${nb})">
      <i class="fas fa-play"></i>
      </button>

  `;
}

function renderShopList() {
  //- render購物車Lists element
  $('.musicLists').empty(); //-清空
  changeAtagHrefWithCartListIdx(); //- <a class="bind_query_A"> 的href query戴上 購物車資訊
  let totalPrice = 0;
  myShopList.forEach((ee, nb) => {
    //- 每一項重新渲染
    totalPrice += parseInt(ee.price);
    const tElement = musicItemHtmlParse(ee, nb);
    $('.musicLists').append(tElement);
  });
  $('#shopTotalCtn').text(myShopList.length);
  $('#shopTotalPrice').text(totalPrice);
}

$('#toggleShopList').on('click', function () {
  //- 開闔shopCart
  $('#shoppingCart').toggleClass('show');
});

$("img[alt='shopping-cart']").bind('click', function () {
  //- (Store.html)加入到購物車
  const findEles = $(this).parents('section').find('.song');
  if (findEles.length == 0) return; //- 沒找到class="song" ele
  const targetMusicName = findEles[0].textContent;

  let FoundIndex = -1; //- arrayObj 找到Music在第幾項
  const FindMusicFromList = fileListsVocal.filter((e, index) => {
    const isReturn = e.name.includes(targetMusicName);
    if (isReturn) FoundIndex = index;
    return isReturn;
  });
  if (FindMusicFromList.length == 0) return; //- arrayObj沒找到Music
  console.log(FindMusicFromList, FoundIndex);

  //   const chooseNbFormBlobalList = parseInt( $(this).attr('key') );
  const isAlreadyInShop =
    myShopList.filter((ee) => ee.name == fileListsVocal[FoundIndex].name)
      .length > 0; //- 是否已在購物車中
  if (!isAlreadyInShop) {
    //- 目標沒有在購物車中
    myShopList.push(fileListsVocal[FoundIndex]);
    myShopListIndex.push(FoundIndex);
    renderShopList();
  } else {
    //alert(tDatas[chooseNbFormBlobalList].name+"已在購物車中!");
    return;
  }
});

function removeItem(nb) {
  //- 移除購物車Item
  nb = parseInt(nb);
  if (myShopList.length - 1 < nb || nb < 0) return;
  myShopList.splice(nb, 1);
  myShopListIndex.splice(nb, 1);
  renderShopList();
}

function playShopCartItem(nb) {
  //- 購物車撥放音樂
  if (!elementAudio || !elementAudioSource) return; //- 沒有<audio> <source>
  myAudioPlayer = new AudioMain(
    elementAudio, //- <audio> tag element
    elementAudioSource, //- <source> tag element
    myShopList,
    true,
    nb,
    callback_play,
    callback_pause,
    callback_end,
  );
  // if(myAudioPlayer!=null){ //- 撥放器 已new
  //     console.log(myAudioPlayer);
  // } else {

  // }
}
