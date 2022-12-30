//팝업
document.querySelector("#layer button").addEventListener("click", function () {
  document.querySelector("#layer").style.display = "none";
});

/*section1 */
$(".dep1 li")
  .mouseover(function () {
    //header__bottom 색변화
    $(".header__bottom").css("backgroundColor", "#2e363d");

    //dep2
    $(this).find(".all_dep2").stop().slideDown(400);
  })
  .mouseout(function () {
    $(".header__bottom").css("backgroundColor", "rgb(46, 54, 61, 0.5)");

    $(this).find(".all_dep2").stop().slideUp(400);
  });

/* section2 banner slides*/
let sec2_slides = $(".popup_banner a img"); //6개 인덱스 저장
// console.log(sec2_slides);
let count = sec2_slides.length,
  currentIndex = 0;

sec2_slides.eq(currentIndex).fadeIn(); //첫 배너 fadein.

setInterval(slidesMove, 4000);

function slidesMove() {
  let nextIndex = (currentIndex + 1) % 6;
  sec2_slides.eq(currentIndex).fadeOut();
  sec2_slides.eq(nextIndex).fadeIn();
  currentIndex = nextIndex;
}



