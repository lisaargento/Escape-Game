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
let $code = 0;

paramObjet($id, $code);




// FONCTIONS UTILES

// Renvoie toutes les informations d'un objet en fonction de son id ou de son idbloque (retour JSON)
function paramObjet(id , code) {
    // code = 0 => id
    // code = 1 => idbloque
    fetch('../php/main.php?id='+id+'&code='+code)
    .then(result => result.json())
    .then(Objetjson => {
        console.log(Objetjson[0]);
        affichageObjet(Objetjson[0]);
    })
}


// Affiche un objet en prenant en compte tous ses paramètres (entrée JSON)
function affichageObjet(objet) {
    // définition de l'icon
    var img = L.icon({
        iconUrl: objet.icone, // lien de l'image !!!!! entre guillement vérifier la sortie JSON !!!!!!
        iconSize:     [50, 50], // taille de l'icone
        iconAnchor:   [25, 25], // point de l'icone qui correspondra à la position du marker
        popupAnchor:  [0, -25] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });
    // affichage du marker et du popup
    var marker = L.marker([objet.latitude, objet.longitude], {icon: img});
    marker.bindPopup(objet.indice);
    // Apparition selon le zoom
    map.on('zoomend', function(){
        if (map.getZoom() < objet.minzoom){
            marker.remove();
        }
        else {
            marker.addTo(map);
        }
    })
}


 






