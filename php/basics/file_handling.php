<?php
define("WEB_DICTIONARY_PATH", "assets/web_dictionary.txt");

heading("readfiled()");
echo readfile(WEB_DICTIONARY_PATH);

heading("fopen() & fclose()");

$web_dictionary = fopen(WEB_DICTIONARY_PATH, "r") or die("Unable to open file!");
echo fread($web_dictionary, filesize(WEB_DICTIONARY_PATH));
fclose($web_dictionary);


function heading($text)
{
    echo  "<br>" . "<h1>" . $text . "</h1>" . "<br>";
}
