
const ham = $('#js-navbtn'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  nav.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  ham.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('section').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});


$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.question-item').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.answers-container').slideToggle();
    $(this).toggleClass("open");
  });
});


$(".slide-items").slick({
  autoplay: true, // 自動再生
  fade: true, // スライドをフェードイン・フェードアウト
  cssEase: 'linear',// アニメーション
  autoplaySpeed: 3000,
  speed: 2000, // フェードアニメーションの速度設定
});
