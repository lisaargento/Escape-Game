// ------------- AFFICHAGE DU COMPTE A REBOURS DANS LE BARRE ------------- //

// Inspiration : https://www.delftstack.com/fr/howto/javascript/count-down-timer-in-javascript/

var chrono = document.getElementById('chrono');

function paddedFormat(num) { //renvoie le nombre complété d'un zéro si <10
    return num < 10 ? "0" + num : num; 
}

function Rebours(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
        if(secondsRemaining<=60){
            chrono.style.color = 'red';
        }


        secondsRemaining -= 1 ;
        if (secondsRemaining < 0) {
            //enregistrer le score actuel?????????????????
            alert("Le temps imparti est dépassé ! Vous avez "+ score+ " points.");
            window.open('../resultats.html'); //redirige vers l'accueil
            clearInterval(countInterval)
        };
    } , 1000);//pour executer le timer après chaque seconde (1000 milisecondes)
}

window.onload = function () {
    let nb_min = 3; // nb de minutes au départ
    let nb_sec = 3; // nb de secondes au départ
    let duration = nb_min * 60 + nb_sec;

    chrono.textContent = `${paddedFormat(nb_min)}:${paddedFormat(nb_sec)}`;

    Rebours(--duration, chrono);
};











//  ------------- AFFICHAGE DE LA CARTE ------------- //

var map = L.map('map');

var maxZoomMap = 19;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: maxZoomMap,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// position de départ du jeu
var positionDepart = [48.841470, 2.587863];
map.setView(positionDepart, 15);













//  ------------- DEROULEMENT DE LA PARTIE ------------- //


// Tableau des différents marqueurs
var ListMarkers = new Array();

// Tableau des objets qui ont été affichés (vide au départ, il se remplit au fur et à mesure)
var ListObjetsAffiches = new Array();


// Initialisation de la partie

var score = 0; // score initial

let id = 1; // id du premier objet affiché

AfficherObjet(id); // affichage du premier objet dont id = 1
/* -------- si c'est faux la ligne d'avant
paramObjet(id); // requête pour obtenir tous les paramètres de cet objet et le traiter
ListObjetsAffiches.push(id); // ajout de l'id du premier objet à la liste des objets qui ont été affichés
console.log(ListObjetsAffiches); // test de vérification
*/




// ------ FONCTIONS UTILES ------ //

// Permet d'afficher un objet en fonction de son id
function AfficherObjet(id) {
    paramObjet(id); // requête permettant d'obtenir tous les paramètres de cet objet et de le traiter
    ListObjetsAffiches.push(id); // ajout de l'id de cet objet à la liste des objets qui ont été affichés
    console.log(ListObjetsAffiches); // test de vérification
}

// Récupère toutes les informations d'un objet en fonction de son id sous format JSON et appelle la fonction affichageObjet
function paramObjet(id) {
    fetch('../php/main.php?id='+id)
    .then(result => result.json())
    .then(objetjson => {
        console.log(objetjson[0]);
        TaitrementObjet(objetjson[0]);
    })
}


// Traitement des objets (en fonction de leur type notamment)
/*
type == 1 : objet code
type == 2 : objet récupérable
type == 3 : objet bloqué par un code
type == 4 : objet bloqué par un autre objet
*/
function TaitrementObjet(objet) {
    var typeObjet = objet['type'];

    // Définition de l'icone en fonction de son type
    var img = CreerIcone(objet, typeObjet);

    // Définition du marker
    var marker = L.marker([objet['latitude'], objet['longitude']], {icon: img});

    // Définition du popup en fonction de son type
// ??? peut-etre mettre condition direct si type == 1 ou 2 pour ne rien créer ???
    var popup = ContenuPopup(objet, typeObjet);
    marker.bindPopup(popup);

    // Affichage direct si le zoom est correct
    if (map.getZoom() >= objet['minzoom']) {
        marker.addTo(map);
    }
    
    // Apparition selon le zoom par la suite dans tous les cas
    map.on('zoomend', function(){
        if (map.getZoom() < objet['minzoom']){
            marker.remove();
        }
        else {
            marker.addTo(map);
        }
    })
    
    // Test et contrôle : mise à jour des marker crées
    ListMarkers.push(marker);
    console.log(ListMarkers);

    // Actions du click en fonction des paramètres de l'objet considéré
    marker.addEventListener('click', function() { click(objet, marker) } );

}



// Créer une icone en fonction du type de l'objet considéré
function CreerIcone(objet, typeObjet) {
    if (typeObjet == 1) {
        // l'image associée à un objet code est affichée en plus gros pour plus de visibilité
        var img = L.icon({
            iconUrl: objet['URLicone'], // lien de l'image
            iconSize:     [200, 200], // taille de l'icone
            iconAnchor:   [25, 25], // point de l'icone qui correspondra à la position du marker
            popupAnchor:  [0, -25] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
        });
    }
    else {
        var img = L.icon({
            iconUrl: objet['URLicone'], // lien de l'image
            iconSize:     [50, 50], // taille de l'icone
            iconAnchor:   [25, 25], // point de l'icone qui correspondra à la position du marker
            popupAnchor:  [0, -25] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
        }); 
    }
    return img;
}


// Définit le contenu d'une popup en fonction du type de l'objet considéré
function ContenuPopup(objet, typeObjet) {
    if (typeObjet == 3) {
        // Création d'un formulaire dans le popup lorsqu'il s'agit d'un objet bloqué par un code        
        var popup = document.createElement('div');
        popup.innerHTML = '<div> <p>'+objet['indice']+'</p> <form><p><input type="text" name="code" id="code" placeholder="Trouve le code ..."></p>'
        + '<p><input type="submit" value="vérifier" id="ok"></p> </form>';
        popup.addEventListener('submit', function(event){ ValidFormObjetCode(event, objet); })
    }
    if (typeObjet == 4) {
        var popup = objet['indice'];
    }
    return popup;
}


// Validation du formulaire d'un objet bloqué par un code
function ValidFormObjetCode(event, objet){
    event.preventDefault(); // on empêche l'envoi du formulaire pour que la page ne se recharge pas

    var code = document.getElementById('code').value; // on récupère la valeur entrée dans le formulaire à la validation
    if (code == objet['idDebloquant']){
        score += 100; // on ajoute des points lorsque le code est trouvé
        console.log('Le code est ok !');
 
        var idLibere = objet['idLibere'];
        if (ListObjetsAffiches.indexOf(idLibere) == -1 ) {
            // Création de l'objet libéré par cet objet bloqué par un code
            AfficherObjet(idLibere);

            // Suppression des marker des objets donc les id sont dans l'intervalle [ id ; idLibere[
        }
    }
    else {
        alert("Le code n'est pas correct ...");
    }
}

// Actions d'un click en fonction des paramètres de l'objets
function click(objet, marker) {
    var type = objet['type'];
    var idSolution = objet['idSolution'];

    // Objet Code ou objet bloqué par un code
    if ( (type == 1 || type == 3) && idSolution != null && ListObjetsAffiches.indexOf(idSolution) == -1) {
        // Création de l'objet solution de cet objet code S'IL EXISTE (et cela qu'une seule fois, d'où la 3ème condition)
        AfficherObjet(idSolution);
    }

    // Objet récupérable
    if ( type == 2 ) {
        score += 200; // on ajoute des points lorsque l'objet est trouvé (i.e. cliqué et mis dans l'inventaire)

        // supprimer le marker de la carte
        marker.remove();
        map.on('zoomend', function(){
            marker.remove();
        });

        // mettre l'objet dans l'inventaire
        var inventaire = document.getElementById('obj');
        var objetInventaire = document.createElement('img');
        objetInventaire.src = objet['URLicone'];
        objetInventaire.style = 'width: 10vw ; height: 18vh';
        inventaire.appendChild(objetInventaire);
    }

    // Objet bloqué par un autre objet
    if ( type == 4 && ListObjetsAffiches.indexOf(idSolution) == -1) {
        // gérer de le débloquer (i.e. libérer l'objet d'idLibere) quand objet débloquant dans l'inventaire
        // if (objet d'ibDebloquant dans l'inventaire) {}
        AfficherObjet(idSolution);

        // Suppression des marker des objets donc les id sont dans l'intervalle [ id ; idLibere[
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*

- revoir code du compte à rebour

- faire les suppressions


- débloquer les objets bloqués par un autre objet lorsque ce dernier est dans l'inventaire
IDEES :
- pour gérer la possibilité du clik (que j'ai bloqué avant), changer cette possibilité lorsque l'objet débloquant est mis dans l'inventaire
- possibilité de cliquer dans l'inventaire ? ça jsp comment faire
- débloquer l'autre objet uniquement si le débloquant est cliqué :
pour cela => donner un id à chaquer image dans l'inventaire pour le vérifier avec ça document.getElementById('idDebloquant') ?



*/




/*

BONUS :

- objet code : mettre un popup sous forme d'image ?

- retirer des points si mauvais code ?

- ajouter de points si objet dans l'inventaire ok MAIS PRENDRE AUSSI EN COMPTE LE TEMPS ?

- reprendre tous les let et les var (pour vérification de la portée de chacun)


*/





