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
                        $(".nameSpan").css({"color":"green","font-size":"12px"});
                    } else if (data == "1") {
                        $(".nameSpan").html("该用户名已存在，请登录或重新注册");
                        $(".nameSpan").css({"color":"red","font-size":"12px"});
                    }
                },
                error: function (error) {
                    console.info(error);
                }
            });
        }
    });

    $$("#userpass").onkeyup=function(){
        $(".passSpan").html("√");
            //长度，6-16；
            //弱：纯数字，纯字母，纯特殊字符
            //中：两个的组合
            //强：三个组合
            var pass = this.value;
        if(pass.length>= 6 && pass.length <= 16) {
        //1、分别查看字符串里是否有，数字，字母，特殊字符
        //1）、数字
        var hasNum = false;
        var regNum = /\d/;
        if (regNum.test(pass)) {
            hasNum = true;
        }
        //2）、字母
        var hasLetter = false;
        var regLetter = /[a-zA-Z]/;
        if (regLetter.test(pass)) {
            hasLetter = true;
        }
        //3）、特殊字符
        var hasSpecial = false;
        var regSpecial = /[@!#\$%]/;
        if (regSpecial.test(pass)) {
            hasSpecial = true;
        }

        let level = hasNum + hasLetter + hasSpecial;
        if (level == 1) {//弱：纯数字，纯字母，纯特殊字
            $(".passSpan").css("background", "lightred");
        } else if (level == 2) {//中：两个的组合
            $(".passSpan").css("background", "yellow");
            // getStyle($$(".passSpan"), "background") = "yellow";
            // $$(".passSpan").style.backgroundColor = "yellow";
        } else if (level == 3) {//强：三个组合
            $(".passSpan").css("background", "green");
            // getStyle($$(".passSpan"), "background") = "green";
            // $$(".passSpan").style.backgroundColor = "green";
        }
    }else{
        $(".passSpan").html("×，亲，请输入6-16位的密码");
    }
};

    $("#makesure").blur(function(){
        if($(this).val()!=$("#userpass").val()){
            alert("两次密码输入不一致，请重新输入");
        }
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
                        location.href="login.html";
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

 
