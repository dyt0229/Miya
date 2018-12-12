<?php
    header("Content-type:text/html;charset=utf-8");

    $username=$_GET['username'];
  
    $conn=mysql_connect("localhost","root","root");
    if(!$conn){
        die("连接错误".mysql_error());
    }else{
        mysql_select_db("aris",$conn);

        $sqlstr="select * from miyavip where username='$username'";
        $result=mysql_query($sqlstr,$conn);
        mysql_close($conn);

        if(mysql_num_rows($result)==0){
            echo "0"; //用户名可以使用
        }else{
            echo "1";  //用户名已存在
        }
    }
?>