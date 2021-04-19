<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callback</title>
</head>

<body>

    <?php

    echo "<h1>array_map()</h1><br>";

    $strings = ["apple", "orange", "banana", "coconut"];
    $lengths = array_map(function ($item) {
        return strlen($item);
    }, $strings);
    print_r($lengths);

    echo "<br><h1>custom</h1><br>";


    function callCallback($callback, $args)
    {
        $callback($args);
    }

    callCallback(function ($msg) {
        echo $msg;
    }, "Hello World!");
    ?>



</body>

</html>