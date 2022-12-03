<?php

header('content-Type: application/json');

// CONNEXION A LA BDD
$link = mysqli_connect('localhost', 'root', 'root', 'bddescapegame');

if (!$link) {
  die('Erreur de connexion');
}

// Pour éviter les problèmes d'encodage entre PHP et la base de données
mysqli_set_charset($link, "utf8");


?>

