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










// AFFICHAGE DES OBJETS

let idObjet = 1;

fetch('../php/main.php?id='+idObjet)
.then(result => result.json())
.then(Objetjson => {
    console.log(Objetjson);
    affichageObjet(Objetjson);
})



function affichageObjet(objet) {

    var img = L.icon({
        iconUrl: objet.icone, // lien de l'image !!!!! entre guillement vérifier la sortie JSON !!!!!!
        iconSize:     [50, 50], // taille de l'icone
        iconAnchor:   [25, 25], // point de l'icone qui correspondra à la position du marker
        popupAnchor:  [0, -25] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });

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








