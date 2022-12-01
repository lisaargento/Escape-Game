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
            //enregistrer le score actuel????????
            alert("Le temps imparti est dépassé ! Vous avez "+ score+ " points.");
            window.open('../resultats.html'); //redirige vers l'accueil
            clearInterval(countInterval)
        };
    } , 1000);//pour executer le timer après chaque seconde (1000 milisecondes)
}

window.onload = function () {
    let nb_min = 5; // nb de minutes au départ
    let nb_sec = 0; // nb de secondes au départ
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

AfficherObjet(id);







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
        TraitementObjet(objetjson[0]);
    })
}


// Traitement des objets (en fonction de leur type notamment)
/*
type == 1 : objet code
type == 2 : objet récupérable
type == 3 : objet bloqué par un code
type == 4 : objet bloqué par un autre objet
*/
function TraitementObjet(objet) {
    var typeObjet = objet['type'];

    // Définition de l'icone en fonction de son type
    var img = CreerIcone(objet, typeObjet);

    // Définition du marker
    var marker = L.marker([objet['latitude'], objet['longitude']], {icon: img});

    // Définition du popup en fonction du type de l'objet
    if ( objet['indice'] != '' ) {
        marker.bindPopup(ContenuPopup(objet, typeObjet));
    }
    
    // Affichage du marker de l'objet en fonction du zoom
    AffichageMarkerZoom(objet, marker);
    
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
            iconAnchor:   [100, 100], // point de l'icone qui correspondra à la position du marker
            popupAnchor:  [0, -100] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
        });
    }
    else {
        var img = L.icon({
            iconUrl: objet['URLicone'], // lien de l'image c'est réglé non?
            iconSize:     [50, 50], // taille de l'icone
            iconAnchor:   [25, 25], // point de l'icone qui correspondra à la position du marker
            popupAnchor:  [0, -25] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
        }); 
    }
    return img;
}



// Définit le contenu d'une popup en fonction du type de l'objet considéré
function ContenuPopup(objet, typeObjet) {
    if ( typeObjet == 3 ) {
        // Création d'un formulaire dans le popup lorsqu'il s'agit d'un objet bloqué par un code        
        var popup = document.createElement('div');
        popup.innerHTML = '<div> <p>'+objet['indice']+'</p> <form><p><input type="text" name="code" id="code" placeholder="Trouve le code ..."></p>'
        + '<p><input type="submit" value="vérifier" id="ok"></p> </form>';
        popup.addEventListener('submit', function(event){ ValidFormObjetCode(event, objet); })
    }
    else {
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
            for (i = objet['id']; i < idLibere; i++) {
                deleteMarker(i);
            }
        }
    }
    else {
        alert("Le code n'est pas correct ...");
    }
}

// Afficher un marker en fonction d'un zoom donné (renseigné dans la base de données)
function AffichageMarkerZoom(objet, marker) {
    var minzoom = objet['minzoom'];
    // Affichage direct si le zoom est correct
     if (map.getZoom() >= minzoom) {
        marker.addTo(map);
    }
    // Apparition selon le zoom par la suite dans tous les cas
    map.on('zoomend', function(){
        if (map.getZoom() < minzoom){
            marker.remove();
        }
        else {
            marker.addTo(map);
        }
    })
}


// supprimer le marker de la carte définitivement
function deleteMarker(id) {
    // suppression immédiate au zoom actuel
    ListMarkers[id-1].remove();
    // suppression à chaque niveau de zoom
    map.on('zoomend', function(){
        ListMarkers[id-1].remove();
    });
}


// Actions d'un click en fonction des paramètres de l'objets
function click(objet) {

    var type = objet['type'];
    var id = objet['id'];
    var idSolution = objet['idSolution'];
    var ibDebloquant = objet['idDebloquant'];
    var idLibere = objet['idLibere'];

    // Objet Code ou objet bloqué par un code
    if ( (type == 1 || type == 3) && idSolution != null && ListObjetsAffiches.indexOf(idSolution) == -1) {
        // Création de l'objet solution de cet objet code S'IL EXISTE (et cela qu'une seule fois, d'où la 3ème condition)
        AfficherObjet(idSolution);
    }

    // Objet récupérable
    if ( type == 2 ) {
        score += 200; // on ajoute des points lorsque l'objet est trouvé (i.e. cliqué et mis dans l'inventaire)

        // supprimer le marker de la carte
        deleteMarker(id);

        // Mettre l'objet dans l'inventaire
        var inventaire = document.getElementById('obj');
        var objetInventaire = document.createElement('input');
        objetInventaire.type = 'image';
        objetInventaire.src = objet['URLicone'];
        objetInventaire.style = 'width: 11vw ; height: 17vh';
        objetInventaire.onclick = '';
        inventaire.appendChild(objetInventaire);



        //  <input type="file" accept="image/*">

        // jouer audio indice

        let i = 1;        
        var audio = new Audio('../img/'+i+'.M4A');
        audio.play();
        i += 1;
        console.log('../img/'+i+'.M4A');
        
        

        // utiliser objet (cliquer dessus pour l'utiliser)


        //sauf crêpe -> si va dans l'inventaire = fin du jeu
    }

    // Objet bloqué par un autre objet
    if ( type == 4 && ListObjetsAffiches.indexOf(idSolution) == -1) {
        // le 1er click libère son objet solution
        AfficherObjet(idSolution);

        // SI l'objet débloquant est SELECTIONNE dans l'inventaire :
        // on supprime l'objet bloqué et son objet solution
        // on affiche son objet libere

        // gérer de le débloquer (i.e. libérer l'objet d'idLibere) quand objet débloquant dans l'inventaire
        // if (objet d'ibDebloquant dans l'inventaire) {}

        // Suppression des markers des objets donc les id sont dans l'intervalle [ id ; idLibere[
            
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*

- retirer tous les marker dans les entêtes de fonction 
=> remplacer marker par ListMarkers[id-1] où id = objet['id'] SAUF POUR LA FONCTION AffichageMarkerZoom

- revoir code du compte à rebour


- débloquer les objets bloqués par un autre objet lorsque ce dernier est dans l'inventaire
IDEES :
- pour gérer la possibilité du clik (que j'ai bloqué avant), changer cette possibilité lorsque l'objet débloquant est mis dans l'inventaire
- possibilité de cliquer dans l'inventaire ? ça jsp comment faire
- débloquer l'autre objet uniquement si le débloquant est cliqué :
pour cela => donner un id à chaquer image dans l'inventaire pour le vérifier avec ça document.getElementById('idDebloquant') ?


*/



/*

BONUS :

- retirer des points si mauvais code ?

- ajouter de points si objet dans l'inventaire ok MAIS PRENDRE AUSSI EN COMPTE LE TEMPS ?

- reprendre tous les let et les var (pour vérification de la portée de chacun)


*/





