<?php

$link = mysqli_connect('localhost', 'root', 'root', 'bddEscapeGame');

if (!$link) {
  die('Erreur de connexion');
} else {
  echo 'Succès... ';
}

// Pour éviter les problèmes d'encodage entre PHP et la base de données
mysqli_set_charset($link, "utf8");

?>

