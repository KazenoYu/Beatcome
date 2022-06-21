// Aside go top 顯示
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.aside__top').addClass('active');
    } else {
      $('.aside__top').removeClass('active');
    }
  });

  $('.aside__top').click(function () {
    $('html').animate({ scrollTop: 0 }, 'slow'); /* 返回到最頂上 */
    return false;
  });
});
