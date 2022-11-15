<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/accueil.css"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"/>
    <title>Escape Game </title>
  </head>

  <body>
    <?php 
      include("../php/connect.php"); 
    ?>
  
    <div id="bouttons">
      <a id="commencer" href="../php/inscription.php">Commencer !</a>
      <a id="resultats" href="../php/resultats.php">Résultats</a>
    </div>

    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"></script>
    <script src='../js/main.js'></script>

  </body>

</html>




