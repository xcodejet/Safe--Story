
<?php 
    require('Database/mysql/connection.php');
    $username   = "kumuthu";
    $password   = "prabhasha2006";
    $first_name = "Kumuthu";
    $last_name  = "Prabhasha";
    $about      = "wtf";
    $gender     = "male";
    $password   = sha1($password);
    $profile_photo = "null";
    $is_deleted = 0;
    $query = "INSERT INTO accounts (username, password, first_name, last_name, about, gender, profile_photo, is_deleted) VALUES ('{$username}', '{$password}', '{$first_name}', '{$last_name}', '{$about}', '{$gender}', '{$profile_photo}', $is_deleted)";

    mysqli_query($connection, $query);
/*    if(isset($_POST["submit"])){
        $first_name = $_POST["fn"];
        $last_name = $_POST["ln"];
        $query = "INSERT INTO mytable VALUES('$first_name','$last_name',2)";
        mysqli_query($connection, $query);
        echo '<script>alert("Submitted.")</script>';
    }
    $first_name = "fn";
    $last_name = "ln";
    $query = "INSERT INTO accounts (first_name,last_name) VALUES('$first_name','$last_name')";
    mysqli_query($connection, $query);
    echo '<script>alert("Submitted.")</script>';*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" autocomplete="off" style="display: flex; flex-direction:column;">
        <label for="">frist name</label>
        <input type="text" name=fn>
        <label for="">last name</label>
        <input type="text" name=ln>
        <input type="submit" name="submit">
    </form>
</body>
</html>
<?php mysqli_close($connection); ?>