<?php 

include('connect.php');


// INSERTION DES DONNEES : temps et score

if( isset( $_GET['temps'] ) ) {
    $temps = $_GET['temps'];
    $score = $_GET['score'];
    $request = " UPDATE joueurs SET temps=$temps, score=$score WHERE temps == NULL";
    mysqli_query($link, $request);
}



?>
