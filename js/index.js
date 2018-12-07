function createUI(that, top1) {
    let boxDom = document.createElement("div");
    boxDom.style.cssText = "width:700px;height:600px;background:yellow;z-Index:2;position:absolute;left:218px;";
    boxDom.style.top = top1 + "px";
    boxDom.className = "appendBox";
    that.append(boxDom);
}

window.onload=function(){
$(".liList").each(function(i){
    let top1 = 0;
    if (i <= 2) {
        top1 = 73*i;
    } else if (i <= 4) {
        top1 = 73*(i-1);
    } else if (i > 4) {
        top1 = 3* 73;
    }
        // console.info(top1);
    $(this).hover(function(){
        $(this).css({
            // "position":"absolute",
            "width":"216px",
            "top":"73*i",
            "margin-left":"-12px",
            "padding-left":"10px",
            "background":"white",
            "border-left":"3px solid #fa4b9b",
            "border-bottom":"1px solid #e5e5e5",
        });
        $(this).children(".liRight").css({
            "display":"none"
        });
        
        $(this).children(".deBox").css("display","block");
        // createUI($(this),top1);
        
    },function(){
        $(this).css({
            // "position":"absolute",
            "width":"206px",
            "left":"12px",
            "background":"",
            "border-left":"0",
            "border-bottom":"1px dashed #d1d1d1"
        });
        $(this).children(".liRight").css({
            "display": "block"
        });
        // $(".appendBox").remove();
        $(this).children(".deBox").css("display", "none");
    })
})
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
}


