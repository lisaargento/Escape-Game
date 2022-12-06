# Escape-Game
Projet web ING2 - Lisa Argento et Claire Girardin

####
Nous avons décidé de vous inviter dans notre premier voyage à vélo à travers la France pour découvrir une magnique région et des paysages méconnus.

Pour nous aider il suffit de suivre les instructions qui suivent !


### Installation
- Téléchargez tous les documents du dossier "télécharger" sur votre ordinateur.
- Lancez MAMP et renseignez (dans Préférences - SERVER) le chemin vers le document "accueil.html" présent dans la racine du dossier téléchargement.
- Connectez la base de données en ligne en suivant les indications ci-dessous.

POUR LA BDD :
- Sur MAMP, cliquez sur "Open WebStart page".
- Cliquez sur le lien vers phpMyAdmin dans le paragraphe PhpMyAdmin.
- Créez manuellement une base de données nommée "bddescapegame" en cliquant sur "New".
- importer le fichier "bddescapegame.sql" dans cette BDD.


! ATTENTION !
Assurez-vous que l'identifiant et le mot de passe sont corrects.
Si ce n'est pas le cas, changez à la ligne "$link = mysqli_connect('localhost', 'root', 'root', 'bddescapegame');" le deuxième "root" par "" dans les fichiers connect.php et inscription.php.



### Pour commencer
- Tapez "localhost" dans la barre d'un moteur de recherche (en vous assurant que MAMP est toujours actif) puis cliquez sur le fichier "accueil.html".
- Activez le son de votre ordinateur.
- Lisez attentivement les conseils de la page d'accueil.
- Appuyez sur le bouton JOUER !
- Renseignez votre nom, prénom et un pseudo et lancez le jeu.

#### A vous de jouer !




### Nos pistes d'amélioration

- Obliger l’unicité de la sélection dans l’inventaire pour débloquer un objet bloqué par un autre objet.
Pour débloquer un objet bloqué par un autre objet, il faut actuellement sélectionner, dans l’inventaire, l’objet débloquant.
Mais par exemple pour la cas de la carte postale :
`Si les vélos sont sélectionnés, la carte postale est débloquée.`
`Si la boite à outils est sélectionnée, la carte postale n’est pas débloquée.`
`MAIS Si les vélos et la boite à outils sont sélectionnés, la carte postale est débloquée.`

C’est ce troisième point qu’il faudrait modifier en ne laissant pas la carte postale être débloquée. Une sorte d’unicité de la solution.
Idées possibles :
- Laisser la possibilité de sélectionner plusieurs objets mais ne débloquer l’objet uniquement si seul(s) son/ses objet(s) débloquant est/sont sélectionné(s)(cela laisse ainsi la possibilité de modifier la base de données pour qu’un objet bloqué par un autre objet puisse être bloqué par plusieurs objets, ce qui implique une sélection multiple dans l’inventaire).
- Forcer une seule sélection possible dans l’inventaire. C’est-à-dire que si l’on clique sur un objet de l’inventaire non sélectionné, cela le sélectionne et désélectionne l’objet sélectionné précédemment (s’il y en a un).



- Déplacement automatique de la map
Pour faciliter le jeu, si possibilité de jouer à des niveaux de difficultés différents, on peut par exemple après avoir débloqué la carte postale emmené le joueur directement centré sur Crozon à un zoom pas trop élevé une fois l’audio terminé.


- Il s’agit d’un TOUR DE FRANCE : région par région ?
On pourrait créer différentes bases de données « jeu » associées à différentes régions (jeu_Bretagne, jeu_Normandie …) et laisser la possibilité aux joueurs en début de partie de choisir à quel endroit il souhaite voyager.
