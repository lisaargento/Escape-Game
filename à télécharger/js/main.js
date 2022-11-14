/*
let today = new Date();
today.getTime(); // le timestamp actuel

Date.now() // le timestamp actuel (méthode statique)
console.log(Date);
*/

var map = L.map('map');

// Position de départ du jeu
let positionDepart = [48.8410, 2.5875];
map.setView(positionDepart, 10);

var marker = L.marker([latitude0, longitude0]).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


