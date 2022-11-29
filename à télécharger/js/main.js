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


// Tableau des différents marqueurs
var ListMarkers = new Array();




// FONCTIONS UTILES

// Récupère toutes les informations d'un objet en fonction de son id sous format JSON et appelle la fonction affichageObjet
function paramObjet(id) {
    fetch('../php/main.php?id='+id)
    .then(result => result.json())
    .then(objetjson => {
        console.log(objetjson[0]);
        affichageObjet(objetjson[0]);
    })
}



// Affichage et traitement d'un objet
// ---- fonction à optimiser 
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

    if (objet['type'] == 3) {
        // création du formulaire dans le popup lorsqu'il s'agit d'un objet bloqué par un code        
        let form = document.createElement('div');
        form.innerHTML = '<div> <p>'+objet['indice']+'</p> <form><p><input type="text" name="code" id="code" placeholder="Trouve le code ..."></p>'
        + '<p><input type="submit" name="ok" value="vérifier" id="ok"></p> </form>';
        form.addEventListener('submit',function(event){ validFormObjetCode(event, objet); })
        marker.bindPopup(form);
    }

    if (objet['indice'] != '' && objet['type'] != 3) {
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

    // faire condition si déjà dedans ne rien faire
    ListMarkers.push(marker);
    console.log(ListMarkers);
    


    // TRAITEMENT DU CLICK
    if (objet['type'] == 2) {
        marker.addEventListener('click', function(){ objetRecuperable(objet) });
    }
    else {
        marker.addEventListener('click', function(){ afficherObjetSolution(objet) });
    }

}



// Permet de mettre un objet récupérable dans l'inventaire
function objetRecuperable(objet) {
    // supprimer le marker de la carte
    marker.remove();

    // mettre l'objet dans l'inventaire
    let inventaire = document.getElementbyId(obj);
    inventaire.innerHTML = '<img src='+ objet['icone'] +' style="width:4vw;height:5vh;">'
    marker.setAttribute("style=width:8vw;height:10vh;", );
    inventaire.appendChild(marker);

}



// Permet d'afficher l'objet solution de l'objet considéré
function afficherObjetSolution(objet) {
    if (objet['idSolution'] != null){
        paramObjet(objet['idSolution']);
    }
}


// Validation du formulaire d'un objet bloqué par un code
function validFormObjetCode(event, objet){
        event.preventDefault();
        let $id = objet['id'];
        var code = document.getElementById("code").value;
        if (code == objet['idDebloquant']){
            console.log('le code est ok');
            ListMarkers[$id].remove();
            let $idLibere = objet['idLibere'];
            if ($idLibere != '') {
                paramObjet($idLibere);
            }
        }
        else {
            alert("Le code n'est pas correct ...");
        }
}






/* .   A FAIRE

Comment supprimer les objets de la crate au fur et à mesure ?
marqueur._leaflet_id
-- Traitement de la suppression des markers ? 
faire apparaitre l'objet libéré et supprimer l'objet actuel et sa solution


-- pour les objets code : faire un autre affichage ? avec une image plus grande ?


comptez les points en fonction de ce qu'il y a dans l'inventaire et du temps


-- ajouter objet solution de objet récupérable s'il existe


-- voir ZOOM (exemple cadenas)


-- attention aux doublons dans la liste des marqueurs


-- reprendre tous les let et var (vérification)

*/

