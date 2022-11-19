<?php 

include('connect.php');

if( isset( $_GET['nom'] ) ) {
    $nom = $_GET['nom'];
    $prenom = $_GET['prenom'];
    $pseudo = $_GET['pseudo'];
    $request = " INSERT INTO joueurs (nom, prenom, pseudo) VALUES ($nom, $prenom, $pseudo) ";
    mysqli_query($link, $request);
}

?>


