$(document).ready(function () {
  $(".menu  > li > a, .logo > a").click(function () {
    event.preventDefault();

    let href = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(href).offset().top - 100,
        },
        300
      );
  });

  let sec_2 = $(".sec_2").offset().top;
  let sec_2_chk = true;
  $(window).scroll(function () {
    let s_top = $(window).scrollTop();

    if (sec_2_chk && s_top + 100 >= sec_2) {
      sec_2_chk = false;
      auto_gauge();
    }
  });
  let timer = 800;
  function auto_gauge() {
    $(".bar_slide")
      .stop(true)
      .animate(
        {
          left: "-99%",
        },
        0
      )
      .animate(
        {
          left: 0,
        },
        timer
      );
  }

  $(".mobile_btn").click(function () {
    if ($(".QR_box").hasClass("QR_open")) {
      $(".QR_box").removeClass("QR_open");
    } else {
      $(".QR_box").addClass("QR_open");
    }
  });
});
