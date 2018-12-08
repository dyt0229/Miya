function createUI(that, top1) {
    let boxDom = document.createElement("div");
    boxDom.style.cssText = "width:700px;height:600px;background:yellow;z-Index:2;position:absolute;left:218px;";
    boxDom.style.top = top1 + "px";
    boxDom.className = "appendBox";
    that.append(boxDom);
}

function scrollShow(){
    $(window).scroll(function(){
        let scrollTop1=$(document).scrollTop();
        if(scrollTop1<=200){
            $(".bodyLeft").css("display","none");
            $(".bodyRight").css("display","none");
        }else{
            $(".bodyLeft").css("display","block");
            $(".bodyRight").css("display","block");
        }
    });
}

function showMa(){
    $(".bodyRight li").each(function () {
        $(this).hover(function () {
            $(this).children(".imgSao").css("display", "block");
            $(this).children(".imgSao").animate({
                // display:"block",
                left: "-160px"
            }, 1000);
        }, function () {
            $(this).children(".imgSao").css({ "display": "none", "left": "-200px" });
        });
    })
}

function showcCart(){
    $(".searRight").each(function(){
        $(this).hover(function(){
            $(this).children(".cartImg").attr("src","imgs/indexImg/cart1.png");
            $(this).children("em").css("display","block");
            $(this).children(".cart").css("border","0");
            $(this).css({ "height": "41px", "border":"1px solid #fa4b9b"});
            $(this).children(".cartCont").css("display","block");
        },function(){
            $(this).children(".cartImg").attr("src", "imgs/indexImg/cart.png");
            $(this).children("em").css("display", "none");
            $(this).children(".cart").css("border", "1px solid #e5e5e5");
            $(this).css({ "height": "34px", "border": "0" });
            $(this).children(".cartCont").css("display", "none");
        });
    });
}


window.onload=function(){
    scrollShow();
    showMa();     
    showcCart();                 
    let s1 = new Slider03({
        $box: $("#banBox"),
        width: 1366,
        height: 480,
        imgs: ["imgs/indexImg/slider.png", "imgs/indexImg/i1.jpg", "imgs/indexImg/i2.jpg", "imgs/indexImg/i3.jpg", "imgs/indexImg/i4.jpg"],
        btnColor: 'gray',
        btnHighColor: '#fa4b9b',
        btnSize: 10,
        timeSpace: 2000
    });
    
$(".liList").each(function(i){
    let top1 = 0;
    if (i <= 2) {
        top1 = 0;
    } else if (i <= 4) {
        top1 = 74;
    } else if (i > 4) {
        top1 = (i-3)* 74;
    }
        // console.info(top1);
    $(this).hover(function(i){
        $(this).css({
            "width":"217px",
            "padding-left":"10px",
            "background":"white",
            "border-left":"3px solid #fa4b9b",
            "border-bottom":"1px solid #e5e5e5",
            "border-top": "1px solid #e5e5e5",
            "border-right":"0"
        });
        $(this).children(".liRight").css({
            "display":"none"
        });
        $(this).children(".line02").css({
            "display":"block",
            "top":73*i
        });
        $(this).children(".deBox").css({"display":"block","top":-top1});
        // createUI($(this),top1);
        
    },function(){
        $(this).css({
            "width":"206px",
            "background":"",
            "border-left":"0",
            "border-bottom":"1px dashed #d1d1d1"
        });
        $(this).children(".liRight").css({
            "display": "block"
        });
        $(this).children(".line02").css({
            "display": "none"
        });
        // $(".appendBox").remove();
        $(this).children(".deBox").css("display", "none");
    })
})
   
}


