
    $("header").load("header.html");
    $("footer").load("footer.html");

    /*
    $(".reBox").each(function(i){
        $(this).children(".proText").children("h3").css({"white-space":"nowrap"});
        $(this).css({"border-color":"white","z-index":"0"});
        $(this).hover(function () {
        $(this).children(".proText").children("h3").css({ "white-space": "" });
        $(this).css({ "border-color": "#fa4b9b", "z-index": "2" });
        },function () {
        $(this).children(".proText").children("h3").css({ "white-space": "nowrap" });
        $(this).css({ "border-color": "white", "z-index": "0" });
        });
        
    });
    */
      
// $(".proBox").on("mouseenter",$(".reBox"),function(){
//     $(this).find("h3").css({ "white-space": "" });
//     $(this).css({ "border-color": "#fa4b9b", "z-index": "2" });
// })
// $(".proBox").on("mouseleave",$(".reBox"), function (){
//     $(this).find("h3").css({ "white-space": "nowrap" });
//     $(this).css({ "border-color": "white", "z-index": "0" });
// })





//let pattrern = /[\s]/g;
$(function(){
    console.log("1")
    $.ajax({
        type:"post",
        url:"php/getGoodsList.php",
        async:true,
        data:{},
        success:function(backdata){
            console.log(backdata);//json数组
            for(let i=0;i<backdata.length;i++){
                // "+data[i].goodsId+"
                let htmlStr = '<li>\
                    <div class="reBox">\
                        <img src="'+ backdata[i].goodsImg + '" alt="" id="'+backdata[i].goodsId+'"/>\
                        <div class="proText">\
                            <div class="proPrice">\
                                <p>￥<b>'+backdata[i].goodsPrice+'</b><em>非自营</em><span>￥'+backdata[i].beiyong2+'</span></p>\
                            </div>\
                            <h3><a href="">'+backdata[i].goodsName+'</a></h3>\
                            <h5><span>直降</span>限时直降</h5>\
                        </div>\
                </div>\
            </li >';
            $(".proBox").children("ul").append(htmlStr);
                dian();
            };

           
            
            $(".reBox").find("h3").css({ "white-space": "nowrap" });
            $(".reBox").css({ "border-color": "white", "z-index": "0" });
            $(".reBox").hover(
                function () {
                    $(this).find("h3").css({ "white-space": "" });
                    $(this).css({ "border-color": "#fa4b9b", "z-index": "2" });
                },
                function () {
                    $(this).find("h3").css({ "white-space": "nowrap" });
                    $(this).css({ "border-color": "white", "z-index": "0" });
                }
            )  
            
        },
        dataType:"json",
        error: function (error) {
            console.info(error);
        }
        // complete:function(backdata){
        //     console.log(backdata);
        // }
    })
})
    function dian(){
        $(".reBox").on("click", function () {
            alert(123);
        });
    }
