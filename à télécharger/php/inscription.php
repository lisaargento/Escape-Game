<?php 

// CONNEXION A LA BDD
$link = mysqli_connect('localhost', 'root', 'root', 'bddescapegame');

if (!$link) {
  die('Erreur de connexion');
}

// Pour éviter les problèmes d'encodage entre PHP et la base de données
mysqli_set_charset($link, "utf8");



// INSERTION DES DONNEES

if( isset( $_GET['nom'] ) ) {
    $nom = $_GET['nom'];
    $prenom = $_GET['prenom'];
    $pseudo = $_GET['pseudo'];
    $request = " INSERT INTO joueurs (nom, prenom, pseudo) VALUES ('$nom', '$prenom', '$pseudo') ";
    mysqli_query($link, $request);
}

?>



