//

$('.drawler_title').click(function () {
  const eleDralwer_Outer = $(this).parent('.drawler_outer');
  const eleContent = eleDralwer_Outer.find('.drawler_content'); //- 抽屜element
  const eleContentHeight = eleDralwer_Outer.find('.drawler_contentHeight'); //- 取抽屜高度element
  const targetH = eleContentHeight.height() + 'px';
  eleDralwer_Outer.toggleClass('show');
  if (eleDralwer_Outer.hasClass('show')) {
    //- Open
    eleContent.css('height', targetH);
  } else {
    //- Close
    eleContent.css('height', '0');
  }
});
