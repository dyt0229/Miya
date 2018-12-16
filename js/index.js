function createUI(that, top1) {
    let boxDom = document.createElement("div");
    boxDom.style.cssText = "width:700px;height:600px;background:yellow;z-Index:2;position:absolute;left:218px;";
    boxDom.style.top = top1 + "px";
    boxDom.className = "appendBox";
    that.append(boxDom);
}

$(function(){
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
    $("header").load("header.html");
    $("footer").load("footer.html");
});



    
                       
    
    

   



