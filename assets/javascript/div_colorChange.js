// function hasClass(ele, cls) {
//   return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
// }

// function addClass(ele, cls) {
//   if (!hasClass(ele, cls)) ele.className += ' ' + cls;
// }

// function removeClass(ele, cls) {
//   if (hasClass(ele, cls)) {
//     var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
//     ele.className = ele.className.replace(reg, ' ');
//   }
// }

// function colorChange() {
//   const ele = document.querySelector('.div_color');
//   console.log(ele);
//   addClass(ele, 'add');
// }

const colors = [
  {
    color: '#121212',
    type: 'Beat',
  },
  {
    color: '#4F76FF',
    type: 'Vocal',
  },
  {
    color: '#FFE34F',
    type: 'Effects',
  },
];

let playType = 0;
function musicTypeNext() {
  playType += 1;
  if (playType >= colors.length) playType = 0;
  $('body').css('background', colors[playType].color);
  $('.colorChange__text').text(colors[playType].type);
  console.log(colors[playType]);
}
function musicTypePrev() {
  playType -= 1;
  // colors.length 為 陣列 "數"
  if (playType < 0) playType = colors.length - 1;
  $('body').css('background', colors[playType].color);
  $('.colorChange__text').text(colors[playType].type);
}
