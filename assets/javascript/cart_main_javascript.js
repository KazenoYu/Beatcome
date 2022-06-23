var delBtnOne = document.querySelector('.delete__BtnOne');
var delBtnTwo = document.querySelector('.delete__BtnTwo');
var delBtnThree = document.querySelector('.delete__BtnThree');
var delBtnFour = document.querySelector('.delete__BtnFour');
var delBtn01 = document.querySelector('.delete__Btn01');
var delBtn02 = document.querySelector('.delete__Btn02');
var delBtn03 = document.querySelector('.delete__Btn03');
var delBtn04 = document.querySelector('.delete__Btn04');
var contentOne = document.querySelector('.content01');
var contentTwo = document.querySelector('.content02');
var contentThree = document.querySelector('.content03');
var contentFour = document.querySelector('.content04');
var pictureOne = document.querySelector('.picture01');
var pictureTwo = document.querySelector('.picture02');
var pictureThree = document.querySelector('.picture03');
var pictureFour = document.querySelector('.picture04');

/*console.log(contentOne.classList.contains('.number'));*/

var songNumber = document.querySelector('.song__number');
var songPrice = document.querySelector('.total__price');

function songNumberFunction() {
  var number01 = contentOne.classList.contains('.number');
  var number02 = contentTwo.classList.contains('.number');
  var number03 = contentThree.classList.contains('.number');
  var number04 = contentFour.classList.contains('.number');
  var totalNumber = number01 + number02 + number03 + number04;
  /*console.log(totalNumber);*/
  songNumber.innerHTML = totalNumber;
}

function songPriceFunction() {
  var price01 = contentOne.classList.contains('.number');
  if (price01 == 1) {
    price01 = 550;
  } else {
    price01 = 0;
  }
  var price02 = contentTwo.classList.contains('.number');
  if (price02 == 1) {
    price02 = 580;
  } else {
    price02 = 0;
  }
  var price03 = contentThree.classList.contains('.number');
  if (price03 == 1) {
    price03 = 500;
  } else {
    price03 = 0;
  }
  var price04 = contentFour.classList.contains('.number');
  if (price04 == 1) {
    price04 = 530;
  } else {
    price04 = 0;
  }
  var totalPrice = price01 + price02 + price03 + price04;
  songPrice.innerHTML = totalPrice;
}

delBtn01.onclick = function () {
  contentOne.style.display = 'none';
  pictureOne.style.display = 'none';
  contentOne.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtn02.onclick = function () {
  contentTwo.style.display = 'none';
  pictureTwo.style.display = 'none';
  contentTwo.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtn03.onclick = function () {
  contentThree.style.display = 'none';
  pictureThree.style.display = 'none';
  contentThree.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtn04.onclick = function () {
  contentFour.style.display = 'none';
  pictureFour.style.display = 'none';
  contentFour.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtnOne.onclick = function () {
  contentOne.style.display = 'none';
  pictureOne.style.display = 'none';
  contentOne.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtnTwo.onclick = function () {
  contentTwo.style.display = 'none';
  pictureTwo.style.display = 'none';
  contentTwo.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtnThree.onclick = function () {
  contentThree.style.display = 'none';
  pictureThree.style.display = 'none';
  contentThree.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

delBtnFour.onclick = function () {
  contentFour.style.display = 'none';
  pictureFour.style.display = 'none';
  contentFour.classList.remove('.number');
  songNumberFunction();
  songPriceFunction();
};

songNumberFunction();
songPriceFunction();

var creditCard = document.querySelector('.credit__card');
var newCard = document.querySelector('.new__card');
var newCardText = document.querySelector('.new__card__text');
var transferTitle = document.querySelector('.transfer__title');
var transferContent = document.querySelector('.transfer__content');
var alertWord = document.querySelector('.alertWord');

creditCard.onclick = function () {
  newCard.classList.add('active');
  transferContent.classList.remove('active');
};

newCard.onclick = function () {
  newCardText.classList.add('active');
};

transferTitle.onclick = function () {
  newCard.classList.remove('active');
  newCardText.classList.remove('active');
  transferContent.classList.add('active');
};

function show() {
  transferContent.classList.add('active');
}

show();

function transferOK() {
  alertWord.classList.add('active');
}
