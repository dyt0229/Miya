window.onload=function(){
    $("header").load("header.html");
    $("footer").load("footer.html");

    function changeBigImg(num){
        var str="";
        switch(num){
            case "0": str ="imgs/detailImg/xbig1.jpg";break;
            case "1": str ="imgs/detailImg/xbig2.jpg";break;
            case "2": str ="imgs/detailImg/xbig3.jpg";break;
            case "3": str ="imgs/detailImg/xbig4.jpg";break;
            default: str='';break;
        }
        return str;
    }
    $(".suoImg").children("img").each(function(i){
        $(this).click(function(){   
            // $("#bigImg").attr("src",changeBigImg(i));

           if(i==0){
               $("#bigImg").attr("src","imgs/detailImg/xbig1.jpg");
           }else if(i==1){
                $("#bigImg").attr("src", "imgs/detailImg/xbig2.jpg");
           }else if(i==2){
               $("#bigImg").attr("src", "imgs/detailImg/xbig3.jpg");
           }else if(i==3){
               $("#bigImg").attr("src", "imgs/detailImg/xbig4.jpg");
           }
            $(this).css("border-color", "#f450a2");
            $(this).siblings().css("border-color", "white");
        });
    });
    //let m1 = new MirrorBox01($$(".bigBox"),396,398, $("#bigImg"),getStyle($$("#bigImg"),"src"), 100, 100, "pink", 3);

    //购买产品选择型号图片选中状态切换
    $(".buyImg").children().each(function(i){
        $(this).click(function(){
            $(this).children(".de").addClass("check");
            $(this).siblings().children(".de").removeClass("check");
        });
    });

    //商品数量改变
    $(".de").each(function(i){
        let count=$("#buyCount").html();
        console.info(count);
        $(".plus").click(function(){
            console.info(count);
            count++;
            $(".minus").css("background-position", "-100px -150px");
            $("#buyCount").html(count);
        });
        $(".minus").click(function(){
            count--;
            if(count<=0){
                $(".minus").css("background-position", "0px -150px");
                count=0;
            }
            $("#buyCount").html(count);
        });
        
    });
    //添加至购物车
    $(".addart").children("a").click(function(){
        $(this).text("已成功添加至购物车");
        $(this).css("background-color","#fa348f");
    });
    

}

