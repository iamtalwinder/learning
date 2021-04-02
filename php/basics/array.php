<?php
$arr = array(2, 1, 3, 4);

rsort($arr);

foreach ($arr as $key => $value) {
    echo "Key: " . $key . ", Value: " . $value . "<br>";
}
