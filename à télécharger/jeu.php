<?php 

include('php/inscription.php');

?>


<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/jeu.css"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"/>
    <link rel="icon" href="img/logo.ico" />
    <title>Un tour de France</title>
  </head>

  <body>
  
    <div id="barre">
      <p>Un tour de France</p>
      <p>le chrono</p>
      <p><a id="sortir" href="accueil.html"><img src="img/sortir.png" style="width:90px;height:70px;"></a></p>
    </div>

    
      <div id="map"></div>

      <aside id="inventaire">
        <p>Inventaire</p>
        <div id=obj></div>
      </aside>
    
    
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"></script>
    <script src='js/main.js'></script>

  </body>

</html>


