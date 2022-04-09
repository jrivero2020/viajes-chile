$(document).ready(function () {

    $(".scrollSuave ul a").on("click", function (e) {
        // 1
        e.preventDefault();
        // 2
        const href = $(this).attr("href");

        // 3
        $("html, body").animate({ scrollTop: $(href).offset().top }, 1200);
    });
}
);

let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-info', 'shadow');
  } else {
    nav.classList.remove('bg-info', 'shadow');
  }
});

