$(function () {
  var imgHeight = $(".kv-wrapper").outerHeight(); //赤ちゃんの画像の高さを取得
  var bgHeight = $(".fv").outerHeight(); //ファーストビューの高さを取得

  // ハンバーガーメニューの処理
  $(".burger-btn").on("click", function () {
    // ハンバーガーボタンがfvより上にあるときの処理
    if ($(window).scrollTop() < imgHeight - 50) {
      // それぞれのクラスに新たなクラスをつける
      $(".bar").toggleClass("cross");
      $(".header-nav").toggleClass("open");
      $(".burger-musk").fadeToggle("300");
      $("body").toggleClass("noscroll");
    } else {
      //ハンバーガーボタンがfvより下にある時の処理
      $(this).toggleClass("black");
      $(".bar").toggleClass("cross");
      $(".header-nav").toggleClass("open");
      $(".burger-musk").fadeToggle("300");
      $("body").toggleClass("noscroll");
    }
  });

  //   スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on("load scroll", function () {
    //   スクロール量が赤ちゃんの画像の高さより小さければ
    if ($(window).scrollTop() < imgHeight - 50) {
      $(".site-title").removeClass("black");
    } else {
      $(".site-title").addClass("black");
    }

    // スクロール量が黒い背景部分より小さければ
    if ($(window).scrollTop() < bgHeight - 50) {
      $(".burger-btn").removeClass("black");
    } else {
      $(".burger-btn").addClass("black");
    }
  });
});
