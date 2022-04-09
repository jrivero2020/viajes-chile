$(document).ready(function () {

    $(".scrollSuave ul a").on("click", function (e) {
        // 1
        e.preventDefault();
        // 2
        const href = $(this).attr("href");
        //alert(href)
        // 3
        $("html, body").animate({ scrollTop: $(href).offset().top }, 1200);
    });
}
);
