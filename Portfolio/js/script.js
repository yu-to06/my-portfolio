$(function () {
  // 変数の宣言
  let $win = $(window),
    $kv = $(".kv"),
    $header = $(".header"),
    $top = $(".top"),
    $dol = $(".dolphin"),
    kvHeight = $kv.outerHeight();
  fixedClass = "fixed";

  // ヘッダーの背景画像がスクロールする処理
  $(function ($) {
    $(".kv").bgSwitcher({
      images: [
        "../img/entrance.jpg",
        "../img/otter.jpg",
        "../img/dolphin-group.jpg",
        "../img/Aquarium.jpg",
        "../img/twin-penguins.jpg",
      ],
      Interval: 5000,
      start: true,
      loop: true,
      shuffle: false,
      effect: "fade",
      duration: 1000,
      easing: "swing",
    });
  });

  //   TOPへ戻るボタンのホバー処理
  if (window.matchMedia("(min-width:1024px)").matches) {
    $top.hover(
      function () {
        $dol.css("visibility", "visible");
      },
      function () {
        $dol.css("visibility", "hidden");
      }
    );
  } else {
    $top.on("click", function () {
      $dol.addClass("visible");
    });
  }
  //ヘッダーがkv過ぎたら出てくる処理とTOPへ戻るボタンが出てくる処理
  $win.on("load scroll", function () {
    let value = $(this).scrollTop();
    if ($win.width() >= 768) {
      if (value > kvHeight) {
        $header.addClass(fixedClass);
        $header.fadeIn(1000);
        $top.addClass(fixedClass);
        $top.fadeIn(1000);
      } else {
        $header.removeClass(fixedClass);
        $header.fadeOut(1000);
        $top.removeClass(fixedClass);
        $top.fadeOut(1000);
        $dol.removeClass("visible");
      }
    }
  });
});
