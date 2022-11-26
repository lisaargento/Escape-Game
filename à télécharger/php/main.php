<?php 

include('connect.php');


// RECUPERER LES INFORMATIONS D'UN OBJET SELON SON ID

if (isset($_GET['id'])) {
  $id = $_GET['id'];

  $request = mysqli_query($link, "SELECT * FROM jeu WHERE id = $id");
  $objet = [];
  foreach ($request as $result) {
    $objet[] = $result;
  }
  echo json_encode($objet, JSON_NUMERIC_CHECK); // pour que tout ne soit pas en chaine de caractère => bon retour JSON !
}



if (isset($_GET['idbloque'])) {
  $idbloque = $_GET['idbloque'];
  
  $request = mysqli_query($link, "SELECT * FROM jeu WHERE idbloque = $idbloque");
  $objet = [];
  foreach ($request as $result) {
    $objet[] = $result;
  }
  echo json_encode($objet, JSON_NUMERIC_CHECK); // pour que tout ne soit pas en chaine de caractère => bon retour JSON !





}



?>




