


    $("#username1").blur(function () {
            if ($(this).val() != '') {
                $.ajax({
                    type: "get",
                    url: "php/register01.php",
                    async: true,
                    data: {
                        'username': $("#username1").val()
                    },
                    success: function (data) {
                        if (data == "0") {
                            console.info("0");
                            $(".nameSpan01").html("该用户名不存在");
                            $(".nameSpan01").css({ "color": "red", "font-size": "12px" });
                        } else if (data == "1") {
                            console.info("用户名存在")
                        }
                    },
                    error: function (error) {
                        console.info(error);
                    }
                });
            }
        });


    
    $("#btn04").click(function(){
        if ($("#username1").val() != '' && $("#userpass1").val()!=''){
            $.ajax({
                type: "post",
                url: "php/login.php",
                async: true,
                data: {
                    'username': $("#username1").val(),
                    'userpass': $("#userpass1").val()
                },
                success: function (data) {
                    if (data == "1") {
                        alert("登录成功！");
                        addCookie("username1", $("#username1").val(), 7);
                        location.href = "index.html";
                    } else if (data == "0") {
                        alert("用户名或密码错误，登录失败，请重新登录！");
                        location.href = "login.html";
                    } 
                },
                error: function (error) {
                    console.info(error);
                }
            });
        }
    });
