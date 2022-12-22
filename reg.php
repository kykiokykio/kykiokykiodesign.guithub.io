<?php

    // 设置使用中国北京时间作为时区
    date_default_timezone_set("PRC");

    $conn = mysqli_connect('127.0.0.1', 'root', '', 'learn') or die("数据库连接不成功.");

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "select username from user where username='$username'";
    $result = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($result);

    if ($count >= 1) {
        die('user-exists');
    }


    $now = date('Y-m-d H:i:s');
    $sql = "insert into user(username, password, createtime) values('$username', '$password', '$now')";
    mysqli_query($conn, $sql) or die('reg-fail');
    mysqli_close($conn);

    echo 'reg-pass';
 
?>