<?php
 
    $username = $_POST['username'];
    $password = $_POST['password'];
    //$vcode = $_POST['vcode'];
    //echo $username . $password . $vcode ."<br>";

    // if($vcode !== "0000") {
    //     die("vcode-error");
    // }

    $conn = mysqli_connect('127.0.0.1', 'root', '', 'learn') or die("数据库连接不成功");
    mysqli_query($conn, "set names utf8");

    $sql = "select * from user where username='$username' and password='$password'";
    //echo $sql . "<br>";
    $result = mysqli_query($conn, $sql);
    //print_r($result);
    if(mysqli_num_rows($result) == 1) {
        echo "login-pass";
    } else {
        echo "login-fail";
    }

    mysqli_close($conn);
?>