//  !!!!! A FAIRE !!!! Gestion du temps de la partie

/*
let today = new Date();
today.getTime(); // le timestamp actuel

Date.now() // le timestamp actuel (méthode statique)
console.log(Date);
*/


// AFFICHAGE DE LA CARTE
var map = L.map('map');

// Position de départ du jeu
let positionDepart = [48.841470, 2.587863];
map.setView(positionDepart, 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




// AFFICHAGE DES OBJETS

var img = L.icon({
    iconUrl: '../img/casses.png',
    iconSize:     [64, 64], // taille de l'icone
    iconAnchor:   [32, 64], // point de l'icone qui correspondra à la position du marker
    popupAnchor:  [-10, -76] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
});

var marker = L.marker([48.841470, 2.587863], {icon: img});


// Apparition selon le zoom

map.on('zoomend', function(){
    if (map.getZoom()<18){
        marker.remove();
    }
    else {
        marker.addTo(map);
    }
})



// GERER LES OBJETS

// à voir ...

/*


let formBottom = document.getElementById('formBottom')
formBottom.addEventListener('submit', ville);

function ville (event) {
  event.preventDefault();
  let select = documet.getElementById('select_communes');

  let val = select.value;
  fetch('requetemain.php?id='+valeurID)
  .then(result => result.json())
  .then(json => {
    let data = JSON.parse(json.geom);
    L.geoJSON(data).addTo(map);
  })
}

*/


