// $$("#username").onblur=function(){
//         ajax03({
//             "url": "php/register01.php",
//             "param": "username="+this.value,
//             "func": showSpan01
//         });
//     }
//     function showSpan01(str){
//         var str1="";
//         if(str=="0"){
//             str1+="该用户名可以注册";
//         }else if(str=="1"){
//             str1+="该用户名已被占用，请重新输入"
//         }
//         $$(".nameSpan").innerHTML=str1;
//     }


    
window.onload=function(){

    $("#username").blur(function () {
        if ($("#username").val() != '') {
            $.ajax({
                type: "get",
                url: "php/register01.php",
                async: true,
                data: {
                    'username': $("#username").val()
                },
                success: function (data) {
                    if (data == "0") {
                        console.info("0");
                        $(".nameSpan").html("该用户名可以使用");
                        $(".nameSpan").css("color", "green");
                    } else if (data == "1") {
                        $(".nameSpan").html("该用户名已存在，请登录或重新注册");
                    }
                },
                error: function (error) {
                    console.info(error);
                }
            });
        }
    });

    $("#userpass").blur(function(){
        
    });
    $("#btn03").click(function(){
        if ($("#username").val() != '' && $("#userpass").val()!=''){
            $.ajax({
                type:"post",
                url:"php/register02.php",
                async:true,
                data:{
                    'username': $("#username").val(),
                    'userpass': $("#userpass").val()
                },
                success:function(data){
                    if(data=="1"){
                        alert("注册成功！");
                        location.href("login.html");
                    }else if(data=="0"){
                        alert("注册失败，请重新注册！");
                    }else if(data==-1){
                        alert("该用户名已经存在，请前往登录或重新注册！");
                    }
                },
                error:function(error){
                    console.info(error);
                }
            });
        }
    });
}

 
