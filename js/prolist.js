
    $("header").load("header.html");
    $("footer").load("footer.html");


    $(".reBox").each(function(i){
        $(this).children(".proText").children("h3").css({ "white-space": "nowrap" });
        $(this).hover(function(){
            $(this).children(".proText").children("h3").css({"white-space":""});
            $(this).css({"border-color":"#fa4b9b","z-index":"1"});
        },function(){
            $(this).children(".proText").children("h3").css({"white-space":"nowrap"});
            $(this).css({"border-color":"white","z-index":"0"});
        });
    });



$(function(){
    console.log("1")
    $.ajax({
        type:"post",
        url:"php/getGoodsList.php",
        async:true,
        data:{},
        success:function(backdata){
            console.log(backdata)
        },
        dataType:"json"
    })
})