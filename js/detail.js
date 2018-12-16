
$(function(){


    let goodsId=localStorage.goodsId;
    $.ajax({
        type:"post",
        url: "php/getGoodsList.php",
        async:true,
        data:{},
        success:function(backdata){
            for(let i=0;i<backdata.length;i++){
                console.info(goodsId);
                if (backdata[i].goodsId == goodsId){
                    $("#bigImg").attr("src",backdata[i].beiyong4);
                    $(".suoImg").children().eq(0).attr("src",backdata[i].beiyong4);
                    $(".suoImg").children().eq(1).attr("src",backdata[i].beiyong5);
                    $(".suoImg").children().eq(2).attr("src",backdata[i].beiyong6);
                    $(".suoImg").children().eq(3).attr("src",backdata[i].beiyong7);
                    $(".rTop").find("h2").html(backdata[i].goodsName);
                    $(".rTop").find("p").html(backdata[i].goodsDesc);
                    $(".sellPrice").find("b").html(backdata[i].goodsPrice);
                    $(".priceBox").find("i").html(backdata[i].beiyong2);
                    $(".A").children("img").attr("src",backdata[i].goodsImg);
                    $(".B").children("img").attr("src", backdata[i].beiyong5);
                    $(".rBotEnd").find("span").html(backdata[i].goodsId);
                    $(".suoImg").children("img").each(function (i) {
                        $(this).click(function () {
                            $("#bigImg").attr("src", $(this).attr("src"));
                            $(this).css("border-color", "#f450a2");
                            $(this).siblings().css("border-color", "white");
                        });
                    });
                }
            }
            
        },
        dataType: "json"
    });

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
    // $("#bigImg").attr("src",changeBigImg(i));
    /*
    $(".suoImg").children("img").each(function (i) {
        $(this).click(function () {
            if (i == 0) {
                $("#bigImg").attr("src", "imgs/detailImg/xbig1.jpg");
            } else if (i == 1) {
                $("#bigImg").attr("src", "imgs/detailImg/xbig2.jpg");
            } else if (i == 2) {
                $("#bigImg").attr("src", "imgs/detailImg/xbig3.jpg");
            } else if (i == 3) {
                $("#bigImg").attr("src", "imgs/detailImg/xbig4.jpg");
            }
            $(this).css("border-color", "#f450a2");
            $(this).siblings().css("border-color", "white");
        });
    });
    */
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
   
});



