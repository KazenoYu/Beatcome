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
