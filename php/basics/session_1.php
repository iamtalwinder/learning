<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessions</title>
</head>

<body>

    <?php
    $_SESSION["name"] = "Talwinder Singh";

    echo "Session variables are set!";
    ?>

    <br>
    <a href="session_2.php">Visit this page to view value of session variables!</a>

</body>

</html>