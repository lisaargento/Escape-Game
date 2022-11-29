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
    let nb_min = 0; // nb de minutes au départ
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

paramObjet(id); // requête pour obtenir tous les paramètres de cet objet et le traiter

ListObjetsAffiches.push(id); // ajout de l'id du premier objet à la liste des objets qui ont été affichés
console.log(ListObjetsAffiches); // test de vérification



// ------ FONCTIONS UTILES ------ //


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

function affichageObjet(objet) {

    // AFFICHAGE DE L'OBJET

    // définition de l'icon
    var img = L.icon({
        iconUrl: objet['URLicone'], // lien de l'image !!!!! entre guillement vérifier la sortie JSON !!!!!!
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

    // Affichage direct si le zoom est correct
    if (map.getZoom() >= objet['minzoom']) {
        marker.addTo(map);
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

    ListMarkers.push(marker);
    console.log(ListMarkers);


    // TRAITEMENT DU CLICK
    if (objet['type'] == 2) {
        marker.addEventListener('click', function(){ objetRecuperable(objet, marker) });
    }
    else {
        marker.addEventListener('click', function(){ afficherObjetSolution(objet) });
        }

}



// Permet de mettre un objet récupérable dans l'inventaire
function objetRecuperable(objet, marker) {
    // supprimer le marker de la carte
    marker.remove();
    map.on('zoomend', function(){
        marker.remove();
    });

    // mettre l'objet dans l'inventaire
    let inventaire = document.getElementById('obj');
    let objetInventaire = document.createElement('img');
    objetInventaire.src = objet['URLicone'];
    objetInventaire.style = 'width: 10vw ; height: 18vh';
    inventaire.appendChild(objetInventaire);

    score += 200;//??????????????ici ça te va?
    
}



// Permet d'afficher l'objet solution de l'objet considéré
function afficherObjetSolution(objet) {
    if ( objet['idSolution'] != null && ListObjetsAffiches.indexOf(objet['idSolution']) == -1 ) {
        paramObjet(objet['idSolution']);
        ListObjetsAffiches.push(objet['idSolution']);
        console.log(ListObjetsAffiches);
    }
}


// Validation du formulaire d'un objet bloqué par un code
function validFormObjetCode(event, objet){
        event.preventDefault();
        let id = objet['id'];
        var code = document.getElementById("code").value;
        if (code == objet['idDebloquant']){
            console.log('le code est ok');
            ListMarkers[id].remove();
            let idLibere = objet['idLibere'];
            score += 100;//??????????????ici ça te va?
            if (idLibere != null && ListObjetsAffiches.indexOf(idLibere) == -1 ) {
                paramObjet(idLibere);
                ListObjetsAffiches.push(idLibere);
                console.log(ListObjetsAffiches);
            }
        }
        else {
            alert("Le code n'est pas correct ...");
        }
}






/* .   A FAIRE

Comment supprimer les objets de la carte au fur et à mesure ?
Traitement de la suppression des markers ? 

----------- faire apparaitre l'objet libéré et supprimer l'objet actuel et sa solution


-- pour les objets code : faire un autre affichage ? avec une image plus grande ?


comptez les points en fonction de ce qu'il y a dans l'inventaire et du temps


-- ajouter objet solution de objet récupérable s'il existe


-- voir ZOOM (exemple cadenas)


-- attention aux doublons dans la liste des marqueurs


-- reprendre tous les let et var (vérification)

*/

