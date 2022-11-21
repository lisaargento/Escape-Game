<?php 

include('connect.php');


// RECUPERER LES INFORMATIONS D'UN OBJET SELON SON ID

if (isset($_GET['id'])) {
  $id = $_GET['id'];

  $param = mysqli_query($link, "SELECT * FROM jeu WHERE id = $id");
  foreach ($param as $result) {
    $objet[] = $result;
  }
  echo json_encode($objet);
}



?>




