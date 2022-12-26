//팝업
document.querySelector("#layer button").addEventListener("click", function () {
  document.querySelector("#layer").style.display = "none";
});

//header__bottom 색변화
$(".dep1 li")
  .mouseover(function () {
    // $(this).closest(".header__bottom").stop().animate({ backgroundColor: "green" }, 1500, "linear");
    // $(this).closest(".header__bottom").css("backgroundColor", "#2e363d");
    $(".header__bottom").css("backgroundColor", "#2e363d");

    $(this).find(".all_dep2").stop().slideDown(400);
  })
  .mouseout(function () {
    // $(this).closest(".header__bottom").css("backgroundColor", "rgb(46, 54, 61, 0.5)");
    $(".header__bottom").css("backgroundColor", "rgb(46, 54, 61, 0.5)");

    $(this).find(".all_dep2").stop().slideUp(400);
  });
