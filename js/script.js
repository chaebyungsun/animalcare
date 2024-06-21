let auto = 0; // 자동실행조건
function autoplay() {
  if (auto === 0) {
    auto = setInterval(function () {
      $(".slide ul").animate({ left: "-100%" }, 200, function () {
        $(".slide ul").append($(".slide li:first")).css("left", 0);
      });
    }, 4000);
  }
}
autoplay();

$(".slide ul,.prev,.next")
  .mouseover(function () {
    clearInterval(auto);
    auto = 0;
  })
  .mouseout(function () {
    autoplay();
  });
// 스플래시
