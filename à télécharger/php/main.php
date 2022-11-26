<?php 

include('connect.php');


// RECUPERER LES INFORMATIONS D'UN OBJET SELON SON ID

if (isset($_GET['id']) AND isset($_GET['code'])) {
  $id = $_GET['id'];
  $code = $_GET['code'];

  // requete selon l'id
  if ($code == 0) {
    $request = mysqli_query($link, "SELECT * FROM jeu WHERE id = $id");
  }
  if ($code == 1) {
    $request = mysqli_query($link, "SELECT * FROM jeu WHERE idbloque = $idbloque");
  }
  else {
    trigger_error("Le code doit être 0 ou 1. Faute de frappe !", E_USER_ERROR);
  }

  $objet = [];
  foreach ($request as $result) {
    $objet[] = $result;
  }
  echo json_encode($objet, JSON_NUMERIC_CHECK); // pour que tout ne soit pas en chaine de caractère => bon retour JSON !
  
}


?>




