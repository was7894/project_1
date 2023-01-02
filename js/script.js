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
let sec2_slides = $(".popup_banner .sec_visual2_list a img");
let count = sec2_slides.length;
let currentIndex = 0;
let ctrl = $(".popup_banner .ctrl a img");

let button = $(".popup_banner .button_list li");

let btnIndex =0;

sec2_slides.eq(currentIndex).fadeIn();


//timer 초기화
let timer;
let btnPlay = $(".btn_play");
let btnStop = $(".btn_stop");

// slide play button
function slidePlay() {
  timer = setInterval(slidesMove, 3000);
  $(".btn_stop").addClass("on");
  $(".btn_play").removeClass("on");
}
// slide stop button
function slideStop() {
  clearInterval(timer);
  $(".btn_play").addClass("on");
  $(".btn_stop").removeClass("on");
}

slidePlay();

// 이벤트핸들러(이벤트종류)
btnStop.click(function (e) {
  e.preventDefault();
  slideStop();
});

btnPlay.click(function (e) {
  e.preventDefault();
  slidePlay();
});

//control index btn
button.click(function (e) {
  e.preventDefault();
  btnIndex = $(this).index();
  // console.log(`click${btnIndex}`);
  button.removeClass("on");
  $(this).eq(btnIndex).find(".btn").addClass("on");
  slideStop();/* 스탑시킨후 버튼누른 페이지로 이동. */
  sec2_slides.stop().fadeOut();
  sec2_slides.eq(btnIndex).stop().fadeIn();
  button.find(".btn").removeClass("on")
  button.eq(btnIndex).find(".btn").addClass("on")
});

function slidesMove() {
  // console.log(`move${btnIndex}`);
  button.eq(currentIndex).find(".btn").removeClass("on");
  let nextIndex = (currentIndex + 1) % count;
  sec2_slides.eq(currentIndex).fadeOut();
  sec2_slides.eq(nextIndex).fadeIn();
  currentIndex = nextIndex;
  button.eq(currentIndex).find(".btn").addClass("on");
}