//  !!!!! A FAIRE !!!! Gestion du temps de la partie

/*
let today = new Date();
today.getTime(); // le timestamp actuel

Date.now() // le timestamp actuel (méthode statique)
console.log(Date);
*/



// AFFICHAGE DE LA CARTE
var map = L.map('map');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// POSITION DE DEPART DU JEU
let positionDepart = [48.841470, 2.587863];
map.setView(positionDepart, 15);



// DEROULEMENT DE LA PARTIE


// Initialisation de la partie : on affiche directement le premier objet
let $id =  1;
paramObjet($id);

/*

 A FAIRE

conditions de vélos réparées et carte postale dans l'inventaire !!!
3 "initalisations"

*/





// FONCTIONS UTILES

// Récupère toutes les informations d'un objet en fonction de son id sous format JSON et appelle la fonction affichageObjet
function paramObjet(id) {
    fetch('../php/main.php?id='+id)
    .then(result => result.json())
    .then(objetjson => {
        console.table(objetjson[0]);
        affichageObjet(objetjson[0]);
    })
}



// Affiche un objet en prenant en compte tous ses paramètres (entrée JSON) et renvoie vers le traitement approprié en fonction de son type
function affichageObjet(objet) {

    // AFFICHAGE DE L'OBJET

    // définition de l'icon
    var img = L.icon({
        iconUrl: objet['icone'], // lien de l'image !!!!! entre guillement vérifier la sortie JSON !!!!!!
        iconSize:     [50, 50], // taille de l'icone
        iconAnchor:   [25, 25], // point de l'icone qui correspondra à la position du marker
        popupAnchor:  [0, -25] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });
    // affichage du marker et du popup lorsqu'il y a un indice
    var marker = L.marker([objet['latitude'], objet['longitude']], {icon: img});
    
    if (objet['indice'] != NULL) {
        marker.bindPopup(objet['indice']);
    }
    
    
    // Apparition selon le zoom
    map.on('zoomend', function(){
        if (map.getZoom() < objet['minzoom']){
            marker.remove();
        }
        else {
            marker.addTo(map);
        }
    })


    // ENVOIE VERS LE TRAITEMENT APPROPRIE LORS DU CLICK EN FONCTION DU TYPE DE L'OBJET
    $type = objet['type'];

    if ($type == 1 && objet['idSolution'] != NULL) {
        marker.addEventListener('click', traitementCode(objet, marker));
    }

    if ($type == 2) {
        marker.addEventListener('click', traitementRecup(objet, marker));
    }

    if ($type == 3) {
        marker.addEventListener('click', traitementBloqueCode(objet, marker));
    }

    if ($type == 4) {
        marker.addEventListener('click', traitementBloqueRecup(objet, marker));
    }

}




function traitementCode(objet, marker) {
    idSolution = objet['idSolution'];
    paramObjet(idSolution);
    
}

function traitementRecup(objet, marker) {
    // supprimer le marker de la carte
    marker.remove();

    // mettre l'objet dans l'inventaire
    
    // cf Lisa <3

}


function traitementBloqueCode(objet, marker) {



}

function traitementBloqueRecup(objet, marker) {
    
}




/*
Comment supprimer les objets au fur et à mesure ?
*/
