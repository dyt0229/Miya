
$(function(){
    function scrollShow() {
        $(window).scroll(function () {
            let scrollTop1 = $(document).scrollTop();
            if (scrollTop1 <= 200) {
                $(".bodyLeft").css("display", "none");
                $(".bodyRight").css("display", "none");
            } else {
                $(".bodyLeft").css("display", "block");
                $(".bodyRight").css("display", "block");
            }
        });
    }

    function showMa() {
        $(".bodyRight li").each(function () {
            $(this).hover(function () {
                $(this).children(".imgSao").css("display", "block");
                $(this).children(".imgSao").animate({
                    left: "-160px"
                }, 1000);
            }, function () {
                $(this).children(".imgSao").css({ "display": "none", "left": "-200px" });
            });
        })
    }
    $(".backTop").click(function () {
        $("body,html").animate({
            scrollTop: "0"
        }, "slow");
    });




    $("footer").load("footer.html");

    scrollShow();
    showMa();
    $.ajax({
        
    });
});

