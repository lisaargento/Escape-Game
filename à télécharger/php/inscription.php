<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>Escape Game </title>
    <meta> 
    <link rel="stylesheet" href="../css/accueil.css"/>
  </head>

  <body id="identification">
    <?php 
          include("connect.php"); 
    ?>
    <h1 id="titre">Un tour de France</h1>
    <div>
      <a id="sortir" href="accueil.html"><img src="img/sortir.png" style="width:90px;height:70px;"></a>
    </div>
        <form action="#" method="get" id="inscription">
            <fieldset>
            <legend>Inscription</legend>
            <p><label>Nom <input type="text" name="nom" placeholder="Duck"></label></p>
            <p><label>Prénom <input type="text" name="prenom" placeholder="Daffy"></label></p>
            <p><label>Pseudo <input type="text" name="pseudo" placeholder="CoIGN-CoIGN l'explorateur"></label></p>
            <p><input type="submit" name="valider" value="Valider" id="valider"></p>
            </fieldset>
        </form>

        <h1 id="slogan">To escape from Champs-sur-Marne</h1>

        <script src="../js/inscription.js" charset="utf-8"></script>
        
    
  </body>
  
  </html>
