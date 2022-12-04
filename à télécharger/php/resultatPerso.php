<?php 

include('connect.php');


// RENVOIE les informations du dernier joueur

$request = mysqli_query($link, "SELECT * FROM joueurs ORDER BY id DESC LIMIT 1");

$objet = [];
foreach ($request as $result) {
  $objet[] = $result;
}
echo json_encode($objet, JSON_NUMERIC_CHECK); // pour que tout ne soit pas en chaine de caractère => bon retour JSON !

?>



